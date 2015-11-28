import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { applyMiddleware } from 'redux';

function getEnvMiddleware() {
  if (__DEVELOPMENT__ || __TEST__) {
    return require('./development');
  } else {
    return require('./production');
  }
}

export default applyMiddleware(
  thunk,
  promise,
  ...getEnvMiddleware()
);
