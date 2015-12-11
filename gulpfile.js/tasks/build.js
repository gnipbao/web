gulp.task('build', () => sequence(
  ['assets', 'bundle']
));

gulp.task('build:full', () => sequence(
  'clean:dist',
  ['assets', 'favicon:generate', 'bundle']
));
