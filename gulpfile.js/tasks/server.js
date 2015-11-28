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
      console.log(`\n🛠 🛠 🛠 🚽 👽 🚷 🚀 🛠 🛠 🛠  WDS: ${url}`);
      console.log(`🍇 🍄 🍉 🍋 🍌 🍎 🍍 🍑 🍒 🍓  PUB: ${publicUrl}\n`);
    }
    callback();
  });
});
