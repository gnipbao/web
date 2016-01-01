import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { applyMiddleware } from 'redux';

import api from './custom/api';
import delay from './custom/delay';

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
  api,
  ...getEnvMiddleware()
);
