import { apiAction, apiReducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/playlists';

import { combineReducers } from 'redux';
import * as reducers from 'reducers/crud';

export const list = apiAction(
  'playlists.list',
  service.list,
  schemas.playlistArray
);

export const load = apiAction(
  'playlists.load',
  service.find,
  schemas.playlist,
  id => ({ id })
);

export const tracks = {
  list: apiAction(
    'playlists.tracks.list',
    service.tracks.list,
    schemas.trackArray,
    id => ({ id })
  )
};

const handlers = {
  [tracks.list]: reducers.paginate('tracks')
};

const initialState = {
  tracks: {}
};

export default apiReducer({
  list,
  load,
  ...handlers
}, initialState);
