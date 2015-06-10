/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/glob/glob.d.ts" />

/// <reference path="./typings/gulp/gulp.d.ts" />
/// <reference path="./typings/gulp-sourcemaps/gulp-sourcemaps.d.ts" />
/// <reference path="./typings/gulp-tsd/gulp-tsd.d.ts" />
/// <reference path="./typings/gulp-tslint/gulp-tslint.d.ts" />
/// <reference path="./typings/gulp-typescript/gulp-typescript.d.ts" />

var gulp = require('gulp');
var taskListing = require('gulp-task-listing');

gulp.task('default', taskListing);
gulp.task('help', taskListing);

var tsHostFiles = ['src/host/**/*.ts', '!src/host/typings/**/*.*'];
var tsDest = "./www";

gulp.task('lint-ts-host', function() {
	var tslint = require('gulp-tslint');
	
	gulp.src(tsHostFiles)
		.pipe(tslint())
		.pipe(tslint.report('full', {
			emitError: true
		}));
});

gulp.task('compile-ts-host', function() {
	var ts = require('gulp-typescript');
	var sourceMaps = require('gulp-sourcemaps');
	
	gulp.src(tsHostFiles)
		.pipe(sourceMaps.init())
		.pipe(ts({
			target: 'ES5',
			module: 'commonjs',
			removeComments: true
		}))
		.pipe(sourceMaps.write('./', {
			addComment: true,
			includeContent: false,
			sourceRoot: '../src/host/',
			includeContext: true
		}))
		.pipe(gulp.dest(tsDest));
});

gulp.task('build-ts-host', [ 'lint-ts-host', 'compile-ts-host' ]);