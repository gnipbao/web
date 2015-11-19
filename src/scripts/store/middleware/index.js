import catchPromise from 'redux-catch-promise';
import { router5Middleware } from 'redux-router5';
import promise from 'redux-promise';

function getEnvMiddleware() {
  if (__DEVELOPMENT__ || __TEST__) {
    return require('./development');
  } else {
    return require('./production');
  }
}

const promiseCatcher = catchPromise((promised, action, store) => {
  // looking for promises?
});

export default (router) => [
  router5Middleware(router),
  promiseCatcher,
  promise,
  ...getEnvMiddleware()
];
