'use strict';

import webpack from 'webpack';

gulp.task('bundle', () => {
  const bundler = webpack(config.webpack);

  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    const verbose = !!config.app.argv.verbose;
    const statsStr = stats.toString({
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
    });

    $.util.log('[webpack]\n', statsStr);
  }

  if (state.isWatching) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});
