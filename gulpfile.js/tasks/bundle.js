import webpack from 'webpack';

const { debug } = logger('app:bundle');
const { verbose, watch } = config.app.argv;

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

// creates a cellback function
// that webpack runs when it's done bundling
const bundleCallback = cb => {
  let initial = true;
  return (err, stats) => {
    logStats(err, stats);

    if (initial) cb();
    // to continue executing gulp tasks when bundle is ready
    // call it only once (the first time) in watch mode
    initial = false;
  };
};

// runs webpack bundler for the given environment name,
// tells webpack to watch for changes if we are in "watch" mode
const bundle = (name, cb) => {
  const cfg = config.webpack[name];
  debug(`${name} config: `, prettyjson(cfg));
  if (watch) debug(`webpack will watch & rebuild ${name} bundle`);
  const bundler = webpack(cfg);
  const done = bundleCallback(cb);
  return watch ?
    bundler.watch(200, done) :
    bundler.run(done);
};

gulp.task('bundle:client', cb => {
  const cfg = config.webpack.client;
  debug('client config: ', prettyjson(cfg));
  return webpack(cfg).run((err, stats) => {
    logStats(err, stats);
    return cb();
  });
});

gulp.task('bundle:server', cb => bundle('server', cb));
gulp.task('bundle', () => sequence([
  'bundle:server',
  'bundle:client'
]));
