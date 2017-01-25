const clean = require('gulp-clean');
const gulp = require('gulp');
const spawn = require('child_process').spawn;
const path = require('path');
const zip = require('gulp-zip');

gulp.task('default', function () {
  spawn('php', ['-S', 'localhost:8080', '-t', 'public'], {
    stdio: 'inherit'
  });
});

gulp.task('iron:clean', function () {
  return gulp.src('dist/iron.io')
    .pipe(clean());
});

gulp.task('iron:build', ['iron:clean'], function () {
  return gulp.src('iron.io/**/*')
    .pipe(zip('iron.zip'))
    .pipe(gulp.dest('dist/iron.io'));
});

gulp.task('iron:deploy', ['iron:build'], function () {
  spawn('iron', [
    'worker',
    'upload',
      '--name', 'HelloSMS',
      '--zip', 'dist/iron.io/iron.zip',
    'node', 'node', 'index.js'
  ], { stdio: 'inherit' });
});
