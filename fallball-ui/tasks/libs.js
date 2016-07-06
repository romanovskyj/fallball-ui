"use strict";

const gulp = require('gulp');

module.exports = function() {
  return gulp.src([
                'es6-shim/es6-shim.min.js',
                'systemjs/dist/system-polyfills.js',
                'systemjs/dist/system.src.js',
                'reflect-metadata/Reflect.js',
                'rxjs/**',
                'core-js/**',
                'zone.js/dist/**',
                '@angular/**',
                'toolbar/**',
                '@angular2-material/**'
                  ], {cwd: "node_modules/**"})
             .pipe(gulp.dest("dist/lib"));
};