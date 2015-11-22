import { applyMiddleware } from 'redux';

import catchPromise from 'redux-catch-promise';
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

export default applyMiddleware(
  promiseCatcher,
  promise,
  ...getEnvMiddleware()
);
