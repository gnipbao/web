import Express from 'express';
import { Server } from 'http';
import consolidate from 'consolidate';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import compression from 'compression';

import config, { resolve, argv } from '../../../config';
import render from 'lib/render';

const { verbose, profile } = argv;
const { debug, log, info, warn, error } = dude('app:server');

const app = new Express();
const server = new Server(app);

app.disable('x-powered-by');
app.use(morgan(verbose ? 'short' : 'dev'));
app.use(render);
app.use(favicon(resolve.dist('favicon.ico')));
app.use(compression());

server.listen(config.server.port, (err) => {
  if (err) {
    error(err);
  } else {
    info('\n🍇 🍄 🍉 🍋 🍌 🍎 🍍 🍑 🍒 🍓 🛠 🚽 👽 🚷 🚀 ');
    info('server is running at: ', config.server.url);
  }
});

process.on('uncaughtException', (err) => {
  error('🚧  unexpected / unhandled fatal error: ', err);
  error('🚧  stopping server');

  server.close();
});
