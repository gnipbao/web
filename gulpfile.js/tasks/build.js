gulp.task('build', (cb) => sequence(
  ['assets', 'bundle'],
  cb
));

gulp.task('build:full', (cb) => sequence(
  'clean:dist',
  ['assets', 'favicon:generate', 'bundle'],
  cb
));
