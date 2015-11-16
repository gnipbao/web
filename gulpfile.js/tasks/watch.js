'use strict';

import path from 'path';

gulp.task('watch', () => {
  global.watching = true;
  const wildcard = path.join(config.app.paths.assets.root, '**/*');
  gulp.watch(wildcard, ['assets']);
});
