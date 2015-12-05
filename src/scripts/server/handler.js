import logger from 'debug-dude';
import LRU from 'lru-cache';
import crypto from 'crypto';
import { syncReduxAndRouter } from 'redux-simple-router';

import history from 'lib/history';
import { create as createStore } from 'store';
import render from 'lib/render';

const { debug, error } = logger('app:server');

export default async (req, res) => {
  try {
    // TODO: cache all the things
    // TODO: server side routing
    // TODO: hydrate on server

    const store = createStore({});
    syncReduxAndRouter(history, store);

    const html = await render(history, store);
    res.status(200).send(html);
  } catch (err) {
    error('fucked up: ', err);
    res.status(500).send(err.stack);
  }
};
