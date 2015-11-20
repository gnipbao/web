import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';

import counter from './examples/counter';
import todo from './examples/todo';

const base = {
  router: router5Reducer
};

const examples = {
  counter,
  todo
};

export default combineReducers({
  ...base,
  ...examples
});
