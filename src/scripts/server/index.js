import { start as prettyErrors } from 'pretty-error';
import Express from 'express';
import { Server } from 'http';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import compression from 'compression';

// <--
import config, { resolve, argv } from '../../../config';
import render from 'lib/universal/render';

const { verbose, profile } = argv;
const { debug, log, info, warn, error } = dude('app:server');

prettyErrors();

const app = new Express();
const server = new Server(app);

app.disable('x-powered-by');
app.use(morgan(verbose ? 'short' : 'dev'));
app.use(favicon(resolve.dist('favicon.ico')));
app.use(compression());
app.use(Express.static('.'));
app.use(render); // <<-

const { host, port, url } = config.server;
server.listen(port, host, (err) => {
  if (err) {
    error(err);
  } else {
    log('\n🍇 🍄 🍉 🍋 🍌 🍎 🍍 🍑 🍒 🍓 🛠 🚽 👽 🚷 🚀 ');
    log(`server is running at: ${url}\n`);
  }
});

process.on('uncaughtException', (err) => {
  error('🚧  unexpected / unhandled fatal error: ', err);
  error('🚧  stopping server');

  server.close();
});
