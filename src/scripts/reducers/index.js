import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';

import counter from './counter';

export default combineReducers({
  router: router5Reducer,
  counter
});
