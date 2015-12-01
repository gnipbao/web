import webpack from 'webpack';

const verbose = !!config.app.argv.verbose;
const statsDisplayOptions = {
  colors: $.util.colors.supportsColor,
  hash: verbose,
  version: verbose,
  timings: verbose,
  chunks: verbose,
  chunkModules: verbose,
  cached: verbose,
  cachedAssets: verbose,
  modules: verbose,
  assets: true,
  errorDetails: true,
  children: false
};

const callback = (err, stats) => {
  if (err) throw new $.util.PluginError('webpack', err);
  $.util.log('[webpack]\n', stats.toString(statsDisplayOptions));
};

gulp.task('bundle:client', () => {
  const bundler = webpack(config.webpack.client)
  return bundler.run(callback)
});
gulp.task('bundle:server', () => {
  const bundler = webpack(config.webpack.server);
  return state.isWatching ?
    bundler.watch(200, bundle) :
    bundler.run(callback);
});
gulp.task('bundle', () => sequence(['bundle:server', 'bundle:client']));
