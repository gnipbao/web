import keyMirror from 'lib/keyMirror';
import { routeActions } from 'redux-simple-router';
import { apiAction, apiReducer, action } from 'lib/redux';

import * as reducers from 'reducers/crud';
import * as schemas from 'api/schemas';
import * as service from 'services/rooms';

export const filters = keyMirror('all', 'public', 'private', 'my');

const enterRoom = apiAction('rooms.api.enter', service.enter,
  schemas.room, (id, userId) => ({ id, userId }));

export const actions = {
  filter: action('rooms.filter', (filter) => ({ filter })),
  list: apiAction('rooms.api.list', service.list, schemas.roomArray),
  load: apiAction('rooms.api.load', service.find, schemas.room, id => ({ id })),
  enter: (id, userId) => (dispatch, getState) => {
    dispatch(enterRoom(id, userId));
    dispatch(routeActions.push(`/rooms/${id}`));
  }
};

export const initialState = {
  filter: filters.all,
  searchQuery: null
};

const handlers = {
  [actions.enter]: reducers.load,
  [actions.filter]: (state, { filter }) => ({ ...state, filter })
};

export default apiReducer({
  list: actions.list,
  load: actions.load,
  ...handlers
}, initialState);
