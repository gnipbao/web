import { compose } from 'redux';

export default (middleware, router) => {
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { DevToolsSlider } = require('components/DevTools');
    const { persistState } = require('redux-devtools');

    const devTools = DevToolsSlider.instrument();
    const debugSessionId = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    const persister = persistState(debugSessionId);

    return compose(middleware, router, devTools, persister);
  } else {
    return compose(middleware, router);
  }
};
