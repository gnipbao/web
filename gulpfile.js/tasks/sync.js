import path from 'path';
import browsersync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const extensions = ['html', 'xml', 'css', 'json'];
const wildcards = extensions.map(ext => resolve.dist(`*.${ext}`));

const sync = (syncConfig = {}) => {
  browsersync({ ...config.app.browsersync, ...syncConfig });
  return gulp.watch(wildcards, browsersync.reload);
};

gulp.task('sync', sync);
gulp.task('sync:proxy', () => {
  const bundler = webpack(config.webpack.client);
  return sync({
    proxy: {
      target: config.app.server.url,
      middleware: [
        webpackDevMiddleware(bundler, config.webpack.devMiddleware),
        webpackHotMiddleware(bundler)
      ]
    }
  });
});
