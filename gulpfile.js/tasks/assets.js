'use strict';

import path from 'path';

const wildcard = path.join(config.app.paths.assets.root, '**/*');

gulp.task('assets', () => {
  return gulp.src(wildcard)
    .pipe($.changed(config.app.paths.dist))
    .pipe(gulp.dest(config.app.paths.dist))
    .pipe($.size({ title: 'assets' }));
});
