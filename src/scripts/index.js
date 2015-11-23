import React from 'react';
import ReactDOM from 'react-dom';

import Immutable from 'immutable';

import { createStore } from 'store';
import { createRouter } from 'router';
import { routes, defaultRoute } from 'routes';

import Root from 'containers/Root';

const router = createRouter(routes, { defaultRoute });

router.start((err, state) => {
  const commonState = Immutable.fromJS(window.__state || {});
  const routerState = { router: { route: state } };
  const initialState = { ...commonState, ...routerState };

  const store = createStore(router, initialState);

  ReactDOM.render(
    <Root store={store} router={router} />,
    document.getElementById('root')
  );
});
