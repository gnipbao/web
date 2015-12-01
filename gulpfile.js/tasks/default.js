gulp.task('default', () => sequence(
  ['assets', 'watch'],
  'bundle:server', 'sync:dev'
));
