import logger from 'debug-dude';
import PrettyError from 'pretty-error';
import LRU from 'lru-cache';
import crypto from 'crypto';
import Qs from 'qs';
import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { bindActionCreators } from 'redux';
import { syncReduxAndRouter, replacePath } from 'redux-simple-router';
import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';
import { getPrefetchedData } from 'react-fetcher';

import getInitialState from './utils/getInitialState';
import createStore from 'store/create';
import history from 'lib/history';
import render from 'lib/render';

import createRoutes from 'routes';
import getStatus from 'routes/getStatus';

const prettyError = new PrettyError();

const runRouter = (routes, location) => new Promise((resolve) =>
  match({ routes, location }, (...args) => resolve(args)));

export default async (req, res) => {
  try {
    cookie.plugToRequest(req, res);
    const location = createLocation(req.originalUrl);

    const initialState = getInitialState();
    console.info('initialState: ', initialState);

    const store = createStore(initialState);
    syncReduxAndRouter(history, store);
    const routes = createRoutes(store);
    const [error, redirectLocation, renderProps] = await runRouter(routes, location);

    if (error) {
      res.status(500).send(error.stack)
    } else if (redirectLocation) {
      if (redirectLocation.state && redirectLocation.state.attempted) {
        const query = Qs.parse(redirectLocation.search);
        query.attempted = redirectLocation.state.attempted;
        redirectLocation.search = '?' + Qs.stringify(query);
      }
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const query = Qs.parse(location.search.slice(1));
      const routingState = query.attempted && { attempted: query.attempted };

      // doesn't matter, routing state will be overwritten anyways,
      // see https://github.com/rackt/redux-simple-router/issues/122
      store.dispatch(replacePath(location.pathname, routingState));

      const status = getStatus(renderProps.routes, 200);

      console.info(`
           location = ${location.pathname},
           original url = ${req.originalUrl},
           status = ${status}
      `);

      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        state: store.getState(),
        dispatch: store.dispatch,
      };

      try {
        await getPrefetchedData(renderProps.components, locals);
        const routerProps = { ...renderProps, location };
        const html = await render(history, store, routerProps);
        res.status(status).send(html);
      } catch (error) {
        res.status(500).send(error.stack)
      }
    } else {
      res.status(404).send('not found');
    }
  } catch (err) {
    console.error(prettyError.render(err));
    res.status(500).end();
  }
};
