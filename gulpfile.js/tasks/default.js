gulp.task('default', () => sequence(
  ['assets', 'watch'],
  'bundle:server',      // build server bundle
  'server',             // start server
  'sync:proxy'          // start browsersync as proxy to express server
));
