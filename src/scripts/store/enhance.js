import { compose } from 'redux';

export default (middleware) => {
  const devTools = window.devToolsExtension ?
    window.devToolsExtension() : f => f;

  return compose(
    middleware,
    devTools
  );
};
