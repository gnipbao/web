import { compose } from 'redux';

export default (middleware, router) => {
  const devTools = window.devToolsExtension ?
    window.devToolsExtension() : f => f;

  return compose(
    middleware,
    router,
    devTools
  );
};
