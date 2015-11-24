import { combineReducers } from 'redux';
import { router5Reducer as router } from 'redux-router5';
import { reducer as form } from 'redux-form';

import * as examples from './examples';

export default combineReducers({
  router,
  form,
  ...examples
});
