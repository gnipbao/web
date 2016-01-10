import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import { reducer as form } from 'redux-form';

import auth from './auth';
import locale from './locale';
import navigation from './navigation';

import profile from './profile';
import entities from './entities';

export default combineReducers({
  routing,
  form,

  auth,
  locale,
  navigation,

  profile,
  entities
});
