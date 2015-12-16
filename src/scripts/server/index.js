import logger from 'debug-dude';
import PrettyError from 'pretty-error';

import Express from 'express';
import { Server } from 'http';

import middleware from './middleware';
import handler from './handler';

const { log, info, warn, error } = logger('app:server');

info('starting...');

const prettyError = new PrettyError();
const app = new Express();
const server = new Server(app);

middleware.forEach(m => app.use(m));
app.use(handler);

const { port = 80, '0.0.0.0' } = settings;
const url = `http://${host}:${port}`;

server.listen(process.env.PORT || port, host, (err) => {
  if (err) {
    error(prettyError.render(err));
  } else {
    if (process.send) process.send('online');

    // 🍇 🍄 🍉 🍋 🍌 🍎 🍍 🍑 🍒 🍓 🛠 🚽 👽 🚷 🚀 
    info('🚀  server is running at: %s\n', url);
  }
});

process.on('uncaughtException', (err) => {
  error('🚧  unexpected / unhandled fatal error: ', prettyError.render(err));
  error('🚧  stopping server');

  server.close();
});
