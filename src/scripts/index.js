import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'store';
import { createRouter } from 'router';
import { routes, defaultRoute } from 'routes';

import Root from 'containers/Root';

const router = createRouter(routes, { defaultRoute });

router.start((err, state) => {
  const commonState = window.__state || {};
  const routerState = { router: { route: state } };
  const store = createStore(router, { ...commonState, ...routerState });

  ReactDOM.render(
    <Root store={store} router={router} />,
    document.getElementById('root')
  );
});
