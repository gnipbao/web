// doesn't work without SSL connection
// so you'll need this only when running in production
//
if (__PRODUCTION__ && __CLIENT__) {
  const registerServiceWorker = require('serviceworker!./serviceworker.js');

  registerServiceWorker({ scope: '/' }).then(() => {
    // Registration was successful, do nothing for now
  }).catch(() => {
    // Registration failed, report it somewhere
  });
}

import logger from 'debug-dude';
import FontFaceObserver from 'fontfaceobserver';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import createStore from 'store/create';
import io from 'socket.io-client';

import history from 'lib/history';
import render from 'lib/render';
import throttle from 'lib/utils/throttle';

function setupSocket() {
  const port = process.env.PORT || settings.port || 80;
  const socket = io(`http://localhost:${port}`);

  // TODO: connection events should be reflected in UI in dev env at least
  // using notifications, snackbar or something similar
  //
  // see https://github.com/socketio/socket.io-client#events-1

  socket.on('connect', () => {
    console.log('[PARTY] connected');
  });

  socket.on('message', data => {
    console.log('[PARTY] server says: ', data.text);
  });
}

window.socket = setupSocket();

function run() {
  // custom throttled events
  throttle('scroll', 'optimizedScroll');
  throttle('resize', 'optimizedResize');

  const initialState = window.__state || {};

  const store = createStore(initialState);
  syncReduxAndRouter(history, store);

  const container = window.document.getElementById('root');
  const component = render(history, store);

  FastClick.attach(document.body)

  // observe loading of Material Icons
  const materialIconsObserver = new FontFaceObserver('Material Icons', {});

  // when Material Icons is loaded,
  // add the js-material-icons-loaded class to the body
  materialIconsObserver.check().then(() => {
    document.body.classList.add('js-material-icons-loaded');
  }, () => {
    document.body.classList.remove('js-material-icons-loaded');
  });

  // make taps on links and buttons work fast on mobiles
  FastClick.attach(document.body);

  ReactDOM.render(component, container);

  if (!__PRODUCTION__) {
    window.React = React;

    if (__DEVELOPMENT__ && __CLIENT__) {
      window.appDebug = require('debug');
      window.appDebug.enable('app:*');
    }

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
}

// run the application when both:
// - DOM is ready
// - page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
