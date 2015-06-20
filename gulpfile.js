/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/glob/glob.d.ts" />

/// <reference path="./typings/gulp/gulp.d.ts" />
/// <reference path="./typings/gulp-sourcemaps/gulp-sourcemaps.d.ts" />
/// <reference path="./typings/gulp-tsd/gulp-tsd.d.ts" />
/// <reference path="./typings/gulp-tslint/gulp-tslint.d.ts" />
/// <reference path="./typings/gulp-typescript/gulp-typescript.d.ts" />

var gulp = require('gulp');
var taskListing = require('gulp-task-listing');
var debug = require('gulp-debug');

gulp.task('default', taskListing);
gulp.task('help', taskListing);

var tsHostFiles = ['src/host/**/*.ts', '!src/host/typings/**/*.*'];
var tsHostDest = "./www";

gulp.task('lint-ts-host', function () {
	var tslint = require('gulp-tslint');

	gulp.src(tsHostFiles)
		.pipe(debug({ title: 'lint-ts-host' }))
		.pipe(tslint())
		.pipe(tslint.report('full', {
		emitError: true
	}));
});

gulp.task('compile-ts-host', function () {
	var ts = require('gulp-typescript');
	var sourceMaps = require('gulp-sourcemaps');

	gulp.src(tsHostFiles)
		.pipe(debug({ title: 'compile-ts-host' }))
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
		.pipe(gulp.dest(tsHostDest));
});

gulp.task('build-ts-host', ['lint-ts-host', 'compile-ts-host']);

gulp.task('clean-host', function() {
	var clean = require('gulp-clean');
	
	gulp.src(tsHostDest, { read: false })
		.pipe(debug({ title: 'clean-host' }))
		.pipe(clean());
});

var tsLatteFiles = ['src/express-latte/**/*.ts', '!src/express-latte/typings/**/*.*'];
var tsLatteDest = "./bin";

gulp.task('lint-ts-latte', function () {
	var tslint = require('gulp-tslint');

	gulp.src(tsLatteFiles)
		.pipe(debug({ title: 'lint-ts-latte' }))
		.pipe(tslint())
		.pipe(tslint.report('full', {
		emitError: true
	}));
});

gulp.task('compile-ts-latte', function () {
	var ts = require('gulp-typescript');

	gulp.src(tsLatteFiles)
		.pipe(debug({ title: 'compile-ts-latte' }))
		.pipe(ts({
		target: 'ES5',
		module: 'commonjs',
		removeComments: true
	}))
		.pipe(gulp.dest(tsLatteDest));
});

gulp.task('build-ts-latte', ['lint-ts-latte', 'compile-ts-latte']);

gulp.task('clean-latte', function() {
	var clean = require('gulp-clean');
	
	gulp.src(tsLatteDest, { read: false })
		.pipe(debug({ title: 'clean-latte' }))
		.pipe(clean());
});

gulp.task('build-ts', ['build-ts-latte', 'build-ts-host']);

gulp.task('clean', ['clean-host', 'clean-latte']);