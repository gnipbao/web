import debug from 'debug';
import logger from 'debug-dude';
import { start as prettyErrors } from 'pretty-error';

import Express from 'express';
import { Server } from 'http';

import middleware from './middleware';
import render from 'lib/universal/render';

prettyErrors();

const levels = ['error', 'warn', 'info', 'log'];
levels.forEach(level => debug.enable(`app:server:${level}`));
const { log, info, warn, error } = logger('app:server');

info('starting...');

const app = new Express();
const server = new Server(app);

middleware.forEach((m) => app.use(m));  // setup middleware
app.use(render);                        // unversal rendering
app.use((err, req, res, next) => {
  error('rendering error: ', error);
  res.status(500);
  if (__DEVELOPMENT__) {
    res.render(
  } else {
  }
});

const { host, port } = settings;
const url = `http://${host}:${port}`;

server.listen(port, host, (err) => {
  if (err) {
    error(err);
  } else {
    if (process.send) process.send('online');

    // 🍇 🍄 🍉 🍋 🍌 🍎 🍍 🍑 🍒 🍓 🛠 🚽 👽 🚷 🚀 
    info('🚀  server is running at: %s\n', url);
  }
});

process.on('uncaughtException', (err) => {
  error('🚧  unexpected / unhandled fatal error: ', err);
  error('🚧  stopping server');

  server.close();
});
