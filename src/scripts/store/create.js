import { createStore } from 'redux';

import middleware from './middleware';
import enhance from './enhance';
import { reducers } from 'modules';

export default (initialState = {}) => {
  const creator = enhance(middleware);
  const create = creator(createStore);
  const store = create(reducers, initialState);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('modules', () => {
      const { patch } = require('modules');
      store.replaceReducer(patch);
    });
  }

  return store;
};
