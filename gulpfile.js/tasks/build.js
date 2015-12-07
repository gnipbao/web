gulp.task('build', () => sequence(
  'clean:dist',
  ['assets', 'favicon:generate', 'bundle']
));
