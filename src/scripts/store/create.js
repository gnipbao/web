import { createStore } from 'redux';

import middleware from './middleware';
import enhance from './enhance';
import reducers from 'modules';

export default function(initialState = {}) {
  const creator = enhance(middleware);
  const create = creator(createStore);
  const store = create(reducers, initialState);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('modules', () => {
      const reducers = require('modules');
      store.replaceReducer(reducers);
    });
  }

  return store;
}
