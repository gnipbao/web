import logger from 'debug-dude';
import PrettyError from 'pretty-error';
import LRU from 'lru-cache';
import crypto from 'crypto';
import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { bindActionCreators } from 'redux';
import { syncReduxAndRouter, pushPath } from 'redux-simple-router';
import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';
import { getPrefetchedData } from 'react-fetcher';

import { create as createStore } from 'store';
import { session } from 'lib/auth';
import history from 'lib/history';
import render from 'lib/render';
import createRoutes, { getStatus } from 'routes';

const prettyError = new PrettyError();
const { log, info, error } = logger('app:server');

const runRouter = (routes, location) => new Promise((resolve) =>
  match({ routes, location }, (...args) => resolve(args)));

export default async (req, res) => {
  try {
    cookie.plugToRequest(req, res);

    const location = createLocation(req.originalUrl);
    const authToken = session.token();

    const initialState = {
      auth: {
        authToken,
        authenticated: Boolean(authToken),
      }
    };

    const store = createStore(initialState);
    syncReduxAndRouter(history, store);
    const routes = createRoutes(store);
    const [error, redirectLocation, renderProps] = await runRouter(routes, location);

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      const redirectUrl = redirectLocation.pathname + redirectLocation.search;
      res.redirect(302, redirectUrl)
    } else if (renderProps) {
      store.dispatch(pushPath(location.pathname, location.state));
      const status = getStatus(renderProps.routes, 200);

      info(`
           location = ${location.pathname},
           original url = ${req.originalUrl},
           status = ${status}
      `);

      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        state: store.getState(),
        dispatch: store.dispatch,
      };

      try {
        await getPrefetchedData(renderProps.components, locals);
        const routerProps = { ...renderProps, location };
        const html = await render(history, store, routerProps);
        res.status(status).send(html);
      } catch (error) {
        res.status(500).send(error.message)
      }
    } else {
      res.status(404).send('not found');
    }
  } catch (err) {
    error(prettyError.render(err));
    res.status(500).end();
  }
};
