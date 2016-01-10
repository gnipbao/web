import merge from 'lodash/object/merge'
import { API } from 'store/middleware/custom/api';

const initialState = {
  users: {},
  providers: {},
  rooms: {},
  playlists: {},
  tracks: {}
};

export default (state = initialState, { payload, meta, ...rest }) => {
  if (!meta || !meta[API]) return state;
  return merge({}, state, payload.data.entities);
}
