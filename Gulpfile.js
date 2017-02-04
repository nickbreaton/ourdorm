const clean = require('gulp-clean');
const cp = require('child_process');
const gulp = require('gulp');
const path = require('path');
const sftp = require('gulp-sftp');

require('dotenv').config();

gulp.task('clean', () => {
  return gulp.src('./dist')
    .pipe(clean());
});

gulp.task('build', ['clean'], () => {
  cp.spawnSync('webpack', ['-p'], {
    stdio: ['inherit', 'inherit', 'inherit']
  });
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
