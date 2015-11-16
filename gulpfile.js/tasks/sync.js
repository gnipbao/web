'use strict';

import browsersync from 'browser-sync';

const wildcards = [
  `${config.app.paths.dist}/*.html`,
  `${config.app.paths.dist}/*.css`
];

gulp.task('sync', () => {
  browsersync(config.app.browsersync);
  gulp.watch(wildcards, browsersync.reload);
});
