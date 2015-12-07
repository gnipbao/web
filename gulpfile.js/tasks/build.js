gulp.task('build', () => sequence(
  'clean:dist',
  'security:check',
  ['assets', 'favicon:generate', 'bundle']
));
