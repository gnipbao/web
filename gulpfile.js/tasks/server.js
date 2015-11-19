'use strict';

import opn from 'opn';
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';

gulp.task('server', (callback) => {
  const { host, port, url, publicUrl } = config.app.server;
  const { devServer } = config.webpack;

  const compiler = webpack(config.webpack);
  const server = new DevServer(compiler, devServer);

  server.listen(port, host, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (process.env.OPEN_IN_BROWSER) {
        opn(url, { app: [process.env.DEVELOPMENT_BROWSER] });
      }
      console.log(`🚧  WDS: ${url}`);
      console.log(`public url: ${publicUrl}`);
    }
    callback();
  });
});
