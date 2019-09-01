'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var del = require('del');
  
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
  
gulp.task('sass', [], function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('clean', function(cb) {
  del(['dist/range.moz.css', 'dist/range.webkit.css', 'dist/range.ms.css', 'dist/range.static.moz.css', 'dist/range.static.webkit.css', 'dist/root.css'], cb);
});

