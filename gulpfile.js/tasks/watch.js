import path from 'path';

gulp.task('watch', () => {
  global.state.isWatching = true;
  const wildcard = path.join(paths.assets.root, '**/*');
  gulp.watch(wildcard, ['assets']);
});
