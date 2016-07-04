"use strict";

const gulp = require('gulp');
const webserver = require('gulp-webserver');

module.exports = function() {
  return gulp.src('./dist').pipe(webserver({
    host: '0.0.0.0',
    port: '8080'
  }));
};