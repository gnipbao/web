import React from 'react';
import ReactDOM from 'react-dom';
import { reduxReactRouter } from 'redux-router';

import createHistory from 'history/lib/createBrowserHistory';

import { createStore } from 'store';
import routes from 'routes';
import Root from 'containers/Root';

const initialState = window.__state || {};
const router = reduxReactRouter({ routes, createHistory });
const store = createStore(router, initialState);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
