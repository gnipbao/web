import { apiAction, apiReducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/playlists';

export const list = apiAction('playlists.list', service.list, schemas.playlistArray);
export const load = apiAction('playlists.load', service.find, schemas.playlist);

export default apiReducer({ list, load });
