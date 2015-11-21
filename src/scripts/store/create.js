import { createStore, applyMiddleware } from 'redux';

import createMiddleware from './middleware';
import enhance from './enhance';
import { reducers } from 'modules';

export default (router, initialState = {}) => {
  const middleware = createMiddleware(router);
  const applied = applyMiddleware(...middleware);
  const creator = enhance(applied);
  const create = creator(createStore);
  const store = create(reducers, initialState);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('modules', () => {
      const modules = require('modules');
      store.replaceReducer(modules.reducers);
    });
  }

  return store;
};
