import { apiAction, apiReducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/playlists';
import * as reducers from 'reducers/crud';

export const list = apiAction(
  'playlists.api.list', {
    request: service.list,
    schema: schemas.playlistArray
  }
);

export const fetch = apiAction(
  'playlists.api.fetch', {
    request: service.fetch,
    schema: schemas.playlist
  }, id => ({ id })
);

export const tracks = {
  list: apiAction(
    'playlists.api.tracks.list', {
      request: service.tracks.list,
      schema: schemas.trackArray,
    }, (id, page, count) => ({ id, page, count })
  )
};

const handlers = {
  [tracks.list]: reducers.nested('tracks', reducers.list)
};

const initialState = {
  tracks: {}
};

export default apiReducer({
  list,
  fetch,
  ...handlers
}, initialState);
