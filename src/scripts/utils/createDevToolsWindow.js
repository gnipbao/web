import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { DevToolsLog } from 'components/DevTools';

export default (store) => {
  const size = { width: 400, height: window.outerHeight };
  const features = 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no';

  const win = window.open(
    null,
    'redux-devtools', // give it a name so it reuses the same window
    `width=${size.width},height=${size.height},${features}`
  );

  // reload in case it's reusing the same window with the old content
  win.location.reload();

  // wait a little bit for it to reload, then render
  setTimeout(() => {
    // Wait for the reload to prevent:
    // "Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element."
    win.document.write('<div id="react-devtools-root"></div>');
    win.document.body.style.margin = '0';

    const root = win.document.getElementById('react-devtools-root');

    ReactDOM.render(
      <Provider store={store}>
        <DevToolsLog />
      </Provider>,
      root
    );
  }, 100);
};
