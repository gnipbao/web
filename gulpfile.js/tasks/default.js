gulp.task('default', () => sequence(
  ['assets', 'watch'],
  'bundle:server',      // build server bundle
  'server',             // start server
  'sync:proxy'          // start browsersync, proxy to server
));
