import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import { reducer as form } from 'redux-form';

import * as examples from './examples';

export default combineReducers({
  routing,
  form,
  ...examples
});
