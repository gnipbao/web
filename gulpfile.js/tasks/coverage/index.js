gulp.task('coverage', () => sequence([
  'coverage:codecov',
  'coverage:coveralls'
]));
