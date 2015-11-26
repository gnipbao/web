import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { reducer as form } from 'redux-form';

import * as examples from './examples';

export default combineReducers({
  router,
  form,
  ...examples
});
