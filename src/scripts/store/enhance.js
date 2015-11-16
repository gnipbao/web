import { compose } from 'redux';

export default (middleware) => {
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { DevToolsLogDockable } = require('components/DevTools');
    const { persistState } = require('redux-devtools');

    const devTools = DevToolsLogDockable.instrument();
    const debugSessionId = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    const persister = persistState(debugSessionId);

    return compose(middleware, devTools, persister);
  } else {
    return compose(middleware);
  }
};
