"use strict";

const gulp = require('gulp');

module.exports = function() {
  return gulp.src(["src/**/*", "!src/**/*.ts"])
             .pipe(gulp.dest('dist'));
}