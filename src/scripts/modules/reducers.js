import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import { reducer as form } from 'redux-form';

import auth from './auth';
import locale from './locale';
import navigation from './navigation';

import profile from './profile';
import users from './users';
import rooms from './rooms';
import playlists from './playlists';
import entities from './entities';

export default combineReducers({
  routing,
  form,

  auth,
  locale,
  navigation,

  entities,
  profile,
  users,
  rooms,
  playlists
});
