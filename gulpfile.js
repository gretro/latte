/// <reference path="./typings/gulp/gulp.d.ts" />

var gulp = require('gulp');
var taskListing = require('gulp-task-listing');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');

gulp.task('default', taskListing);
gulp.task('help', taskListing);

gulp.task('lint-ts-host', function() {
	gulp.src('host/**/*.ts')
		.pipe(tslint())
		.pipe(tslint.report('full', {
			emitError: true
		}));
});

gulp.task('compile-ts-host', function() {
	gulp.src('host/**/*.ts')
		.pipe(ts({
			target: 'ES5',
			declarationFiles: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('build-ts-host', [ 'lint-ts-host', 'compile-ts-host' ]);