gulp.task('run', () => sequence(
  'build:full',
  'server'
));
