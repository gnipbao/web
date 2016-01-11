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
  const isApiAction = meta && meta[API];
  const hasData = payload && payload.data;

  // TODO: here payload.data contains links also

  if (isApiAction && hasData) {
    return merge({}, state, payload.data.entities);
  }

  return state;
}
