import { apiAction } from 'lib/redux';

import * as schemas from 'api/schemas';
import * as service from 'services/playlists';

export const list = apiAction(
  'playlists.api.list', {
    request: service.list,
    schema: schemas.playlistArray
  }, (page, count) => ({ page, count })
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
  ),

  destroy: apiAction(
    'playlists.api.tracks.destroy', {
      request: service.tracks.destroy
    }, (id, trackId) => ({ id, trackId })
  )
};
