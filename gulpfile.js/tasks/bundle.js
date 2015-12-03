import webpack from 'webpack';

const { debug } = logger('app:bundle');
const verbose = !!config.app.argv.verbose;

const displayOptions = {
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

const logStats = (err, stats) => {
  if (err) throw new $.util.PluginError('webpack', err, { showStack: true });
  $.util.log('[webpack]\n', stats.toString(displayOptions));
};

gulp.task('bundle:client', (cb) => {
  const cfg = config.webpack.client;
  debug('client config: ', prettyjson(cfg));
  return webpack(cfg).run((err, stats) => {
    logStats(err, stats);
    return cb();
  });
});

gulp.task('bundle:server', (cb) => {
  const cfg = config.webpack.server;
  const bundler = webpack(cfg);

  let runCount = 0;
  const done = (err, stats) => {
    logStats(err, stats);
    return ++runCount === 1 && cb();
  };

  debug('server config: ', prettyjson(cfg));
  if (state.isWatching) debug('webpack will watch & rebuild server bundle');

  return state.isWatching ?
    bundler.watch(200, done) :
    bundler.run(done);
});

gulp.task('bundle', () => sequence([
  'bundle:server',
  'bundle:client'
]));
