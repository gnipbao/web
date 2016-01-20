import keyMirror from 'lib/keyMirror';
import { routeActions } from 'redux-simple-router';
import { apiAction, apiReducer, action } from 'lib/redux';

import * as reducers from 'reducers/crud';
import * as schemas from 'api/schemas';
import * as service from 'services/rooms';

export const filters = keyMirror('all', 'public', 'private', 'my');

function withRedirect(action, path, dispatch) {
  dispatch(action);
  dispatch(routeActions.push(path));
}

export const actions = {
  filter: action('rooms.filter', (filter) => ({ filter })),

  list: apiAction(
    'rooms.api.list', {
      request: service.list,
      schema: schemas.roomArray
    }
  ),

  fetch: apiAction(
    'rooms.api.fetch', {
      request: service.fetch,
      schema: schemas.room,
    }, id => ({ id })
  ),

  room: {
    enter: apiAction(
      'rooms.api.enter', {
        request: service.enter,
        schema: schemas.room
      }, (id, userId) => ({ id, userId })
    ),

    exit: apiAction(
      'rooms.api.exit', {
        request: service.exit,
        schema: schemas.room
      }, (id, userId) => ({ id, userId })
    )
  }
};

const handlers = {
  [actions.filter]: (state, { filter }) => ({ ...state, filter }),

  [actions.room.enter]: reducers.load,
  [actions.room.exit]: reducers.load
};

export const initialState = {
  filter: filters.all,
  searchQuery: null,
  users: {}
};

export default apiReducer({
  list: actions.list,
  fetch: actions.fetch,
  ...handlers
}, initialState);
