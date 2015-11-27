import { compose } from 'redux';

const createDevTools = () => {
  if (__CLIENT__ && __DEVELOPMENT__) {
    if (__DEVTOOLS__) {
      const DevTools = require('components/DevTools');
      return DevTools.instrument();
    }
    return window.devToolsExtension &&
      window.devToolsExtension();
  }
  return f => f;
};

export default (middleware) => {
  const devTools = createDevTools();

  return compose(
    middleware,
    devTools
  );
};
