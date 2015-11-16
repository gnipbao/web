'use strict';

import opn from 'opn';
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';

gulp.task('server', (callback) => {
  const { host, port, url } = config.app.server;
  const { devServer } = config.webpack;

  const compiler = webpack(config.webpack);
  const server = new DevServer(compiler, devServer);

  server.listen(port, host, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (process.env.openInBrowser) {
        opn(url, { app: [config.app.developmentBrowser] });
      }
      console.log('🚧  WDS: %s', url);
    }
    callback();
  });
});
