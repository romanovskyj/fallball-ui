"use strict";

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const tsc = require('gulp-typescript');
const tsProject = tsc.createProject("tsconfig.json");

const compile = require('./tasks/compile');
const libs = require('./tasks/libs');
const resources = require('./tasks/resources');
const webserver = require('./tasks/webserver');

gulp.task('compile', compile);
gulp.task('libs', libs);
gulp.task('resources', resources);
gulp.task('webserver', webserver);
gulp.task('build', ['compile', 'libs', 'resources']);