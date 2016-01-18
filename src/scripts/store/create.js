import { createStore } from 'redux';
import { syncHistory } from 'redux-simple-router';

import { setup } from './middleware';
import enhance from './enhance';
import reducers from 'modules';

export default function(history, initialState = {}) {
  const routerMiddleware = syncHistory(history);
  const middleware = setup(routerMiddleware);

  const creator = enhance(middleware);
  const create = creator(createStore);
  const store = create(reducers, initialState);

  if (__DEVELOPMENT__ && __DEVTOOLS__) {
    middleware.listenForReplays(store)
  }

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('modules', () => {
      const reducers = require('modules');
      store.replaceReducer(reducers);
    });
  }

  return store;
}
