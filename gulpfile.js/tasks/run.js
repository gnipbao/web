gulp.task('run', () => sequence(
  'build',
  'server'
));
