import { createStore } from 'redux';

import reducer from 'reducers';
import createMiddleware from './createMiddleware';
import enhance from './enhance';

export default (router, initialState = {}) => {
  const middleware = createMiddleware(router);
  const creator = enhance(middleware);
  const create = creator(createStore);
  const store = create(reducer, initialState);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
