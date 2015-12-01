import dude from 'debug-dude';
import webpack from 'webpack';

const { debug } = dude('app:bundle');
const { info } = dude('app:webpack');

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

const logStats = (err, stats) => {
  if (err) throw new $.util.PluginError('webpack', err);
  info(stats.toString(statsDisplayOptions));
};

gulp.task('bundle:client', () => {
  const cfg = config.webpack.client;

  debug('client config: \n', cfg);

  return webpack(cfg).run(logStats)
});

gulp.task('bundle:server', () => {
  const cfg = config.webpack.server;
  const bundler = webpack(cfg);

  debug('server config: \n', cfg);
  debug('webpack will watch & rebuild server bundle');

  return state.isWatching ?
    bundler.watch(200, bundle) :
    bundler.run(logStats);
});

gulp.task('bundle', () => sequence([
  'bundle:server',
  'bundle:client'
]));
