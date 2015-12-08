gulp.task('heroku:production', () => sequence(
  'build',
  'server'
));
