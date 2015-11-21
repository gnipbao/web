gulp.task('build', () => sequence('clean', ['assets', 'bundle']));
