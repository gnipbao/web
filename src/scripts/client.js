import logger from 'debug-dude';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { create as createStore } from 'store';

import history from 'lib/history';
import render from 'lib/render';
import throttle from 'lib/utils/throttle';

// custom throttled events
throttle('scroll', 'optimizedScroll');
throttle('resize', 'optimizedResize');

const initialState = window.__state || {};

const run = async () => {
  const store = createStore(initialState);
  syncReduxAndRouter(history, store);

  const container = window.document.getElementById('root');
  const component = await render(history, store);

  ReactDOM.render(component, container);

  if (!__PRODUCTION__) {
    window.React = React;

    if (__PROFILE__) {
      // see https://facebook.github.io/react/docs/perf.html
      window.Perf = require('react-addons-perf');
      window.Perf.start();
    }

    const failed =
      !container ||
      !container.firstChild ||
      !container.firstChild.attributes ||
      !container.firstChild.attributes['data-react-checksum'];

    if (failed) {
      console.error(
        `Server-side React render was discarded, investigate, good luck.`
      );
    }

    if (__DEVTOOLS__ && !window.devToolsExtension) {
      const DevTools = require('components/DevTools');

      ReactDOM.render(
        <Provider store={store} key='provider'>
          <div>{component}<DevTools /></div>
        </Provider>,
        container
      );
    }
  }
};

// run the application when both:
// DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
