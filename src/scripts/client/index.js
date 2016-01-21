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

import FontFaceObserver from 'fontfaceobserver';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import createStore from 'store/create';
import * as environment from 'modules/environment';

import history from 'lib/history';
import render from 'lib/render';
import throttle from 'lib/utils/throttle';
import * as socket from './socket';


function run() {
  // custom throttled events
  throttle('scroll', 'optimizedScroll');
  throttle('resize', 'optimizedResize');

  const initialState = window.__state || {};

  const store = createStore(history, initialState);
  store.dispatch(environment.init({
    width: window.innerWidth,
    height: window.innerHeight
  }));

  window.socket = socket.setup(store);
  window.addEventListener(
    'optimizedResize',
    () => store.dispatch(
      environment.resize(
        window.innerWidth,
        window.innerHeight
      )
    )
  );

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
      const DevTools = require('components/dev_tools');

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
