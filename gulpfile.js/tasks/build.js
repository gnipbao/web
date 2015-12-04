gulp.task('build', () => sequence(
  'clean',
  ['assets', 'favicon:generate', 'bundle']
));
