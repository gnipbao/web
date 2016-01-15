import { apiAction, apiReducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/playlists';
import * as reducers from 'reducers/crud';

export const list = apiAction(
  'playlists.api.list',
  service.list,
  schemas.playlistArray
);

export const load = apiAction(
  'playlists.api.load',
  service.find,
  schemas.playlist,
  id => ({ id })
);

export const tracks = {
  list: apiAction(
    'playlists.api.tracks.list',
    service.tracks.list,
    schemas.trackArray,
    id => ({ id })
  )
};

const handlers = {
  [tracks.list]: reducers.nested('tracks')
};

const initialState = {
  tracks: {}
};

export default apiReducer({
  list,
  load,
  ...handlers
}, initialState);
