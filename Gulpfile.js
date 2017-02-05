const clean = require('gulp-clean');
const exec = require('execa');
const gulp = require('gulp');
const path = require('path');
const sftp = require('gulp-sftp');

require('dotenv').config();

gulp.task('default', ['server']);

gulp.task('server', () => {
  exec.sync('webpack-dev-server', ['--devtool', 'source-map'], { stdio: 'inherit'} );
});

gulp.task('clean', () => {
  return gulp.src('./dist')
    .pipe(clean());
});

gulp.task('build', ['clean'], () => {
  exec.sync('webpack', ['-p'], { stdio: 'inherit' });
});

gulp.task('deploy', ['build'], () => {
  return gulp.src('./dist/**/*')
    .pipe(sftp({
      host: process.env.SFTP_HOST,
      user: process.env.SFTP_USER,
      pass: process.env.SFTP_PASS,
      remotePath: process.env.SFTP_PATH
    }));
});
