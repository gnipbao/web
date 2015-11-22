import { createStore } from 'redux';

import middleware from './middleware';
import enhance from './enhance';
import { reducers } from 'modules';

export default (router, initialState = {}) => {
  const creator = enhance(middleware, router);
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
