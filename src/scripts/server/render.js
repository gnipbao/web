import fs from 'fs';
import logger from 'debug-dude';
import LRU from 'lru-cache';
import crypto from 'crypto';
import ReactDOM from 'react-dom/server';
import { syncReduxAndRouter } from 'redux-simple-router';

import history from 'lib/history';
import { create as createStore } from 'store';
import Root from 'containers/Root';

import Html from './templates/Html';
import Resolver from './Resolver';

const { debug, error } = logger('app:server');

export default async (req, res) => {
  // put all shit together

  const store = createStore({});
  const resolver = new Resolver();

  syncReduxAndRouter(history, store);

  // TODO: get assets from fs
  // TODO: cache all the things
  // TODO: hydrate on server
  const assets = {};

  const root = <Root store={store} history={history} />;
  const html = <Html store={store} assets={assets} component={root} />;

  const htmlStr = ReactDOM.renderToString(html);
  const body = `<!doctype html>\n${htmlStr}`;

  res.status(200).send(body);
};
