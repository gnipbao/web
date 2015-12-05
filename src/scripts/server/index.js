require('./bootstrap');

import logger from 'debug-dude';

import Express from 'express';
import { Server } from 'http';

import middleware from './middleware';
import handler from './handler';

const { log, info, warn, error } = logger('app:server');

info('starting...');

const app = new Express();
const server = new Server(app);

middleware.forEach((m) => app.use(m));  // setup middleware
app.use(handler);                       // unversal rendering

// error handling
app.use((err, req, res, next) => {
  error('server error: ', error);

  res.status(500);

  if (__PRODUCTION__) {
    res.end();
  } else {
    res.send(err.stack);
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
