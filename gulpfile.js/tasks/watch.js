import path from 'path';

const wildcard = path.join(paths.assets.root, '**/*');

gulp.task('watch', () => {
  global.state.isWatching = true;
  gulp.watch(wildcard, ['assets']);
});
