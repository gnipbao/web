import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import browsersync from 'browser-sync';

const wildcards = [
  `${config.app.paths.dist}/*.html`,
  `${config.app.paths.dist}/*.css`
];

const sync = (options = {}) => {
  browsersync({ ...config.app.browsersync, ...options });
  return gulp.watch(wildcards, browsersync.reload);
};

gulp.task('sync', sync);
gulp.task('sync:dev', () => {
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
