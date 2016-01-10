import { apiAction } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/playlists';

export const list = apiAction('playlists.list', service.list, schemas.playlistArray);
export const find = apiAction('playlists.find', service.find, schemas.playlist);
