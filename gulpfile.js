'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
  
gulp.task('default', ['sass', 'sass:watch', 'webserver'], function () { });

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: {
        enable: true,
        path: './'
      },
      open: true
    }));
});
  
gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});
