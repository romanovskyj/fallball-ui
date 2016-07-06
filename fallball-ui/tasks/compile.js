"use strict";

const gulp = require('gulp');
const tsc = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject('tsconfig.json');

module.exports = function() {
  const tsResult = gulp.src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject));
    
  return tsResult.js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
};