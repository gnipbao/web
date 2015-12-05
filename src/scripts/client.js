import logger from 'debug-dude';
import { syncReduxAndRouter } from 'redux-simple-router';
import { create as createStore } from 'store';

import history from 'lib/history';
import render from 'lib/render';

const { error } = logger('app:server');
const initialState = window.__state || {};

const run = async () => {
  const store = createStore(initialState);
  syncReduxAndRouter(history, store);

  const container = window.document.getElementById('root');
  const component = await render(history, store);

  ReactDOM.render(component, container);

  if (!__PRODUCTION__) {
    window.React = React;

    window.Perf = require('react-addons-perf');
    window.Perf.start();

    const failed =
      !container ||
      !container.firstChild ||
      !container.firstChild.attributes ||
      !container.firstChild.attributes['data-react-checksum'];

    if (failed) error('server-side React render was discarded');
  }
};

// run the application when both:
// DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
