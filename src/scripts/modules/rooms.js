import keyMirror from 'lib/keyMirror';
import { pushPath } from 'redux-simple-router';
import { apiAction, apiReducer, action } from 'lib/redux';

import * as reducers from 'reducers/crud';
import * as schemas from 'api/schemas';
import * as service from 'services/rooms';

export const Filters = keyMirror(
  'all',
  'public',
  'private',
  'my'
);

export const list = apiAction(
  'rooms.api.list',
  service.list,
  schemas.roomArray
);

export const load = apiAction(
  'rooms.api.load',
  service.find,
  schemas.room,
  id => ({ id })
);

export const enter = apiAction(
  'rooms.api.enter',
  service.enter,
  schemas.room,
  (id, userId) => ({ id, userId })
);

export const enterAndRedirect = (id, userId) =>
  (dispatch, getState) => {
    dispatch(enter(id, userId));
    dispatch(pushPath(`/rooms/${id}`));
  };

const filter = action('rooms.filter', (filter) => ({ filter }));

const initialState = {
  filter: Filters.all,
  searchQuery: null
};

const handlers = {
  [enter]: reducers.load,
  [filter]: (state, { filter }) => ({ ...state, filter })
};

export default apiReducer({
  list,
  load,
  ...handlers
}, initialState);
