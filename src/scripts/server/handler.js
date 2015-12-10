import logger from 'debug-dude';
import PrettyError from 'pretty-error';
import LRU from 'lru-cache';
import crypto from 'crypto';
import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { bindActionCreators } from 'redux';
import { syncReduxAndRouter, pushPath } from 'redux-simple-router';

import { create as createStore } from 'store';
import history from 'lib/history';
import render from 'lib/render';
import routes, { getStatus } from 'routes';

const prettyError = new PrettyError();
const { log, info, error } = logger('app:server');

const runRouter = (location) => new Promise((resolve) =>
  match({ routes, location }, (...args) => resolve(args)));

export default async (req, res) => {
  try {
    // TODO: cache all the things
    // TODO: hydrate on server

    const location = createLocation(req.originalUrl);
    const [error, redirectLocation, renderProps] = await runRouter(location);

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      const redirectUrl = redirectLocation.pathname + redirectLocation.search;
      res.redirect(302, redirectUrl)
    } else if (renderProps) {
      const store = createStore({});

      syncReduxAndRouter(history, store);
      store.dispatch(pushPath(location.pathname, true));
      const routerProps = { ...renderProps, location };
      const status = getStatus(renderProps.routes, 200);

      const html = await render(history, store, routerProps);
      info(`location = ${location.pathname}, original url = ${req.originalUrl}, status = ${status}`);
      res.status(status).send(html);
    } else {
      res.status(404).send('not found');
    }
  } catch (err) {
    error(prettyError.render(err));
    res.status(500).end();
  }
};
