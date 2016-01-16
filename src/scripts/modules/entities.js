import merge from 'lodash/merge'
import { API } from 'store/middleware/custom/api';

const initialState = {
  users: {},
  providers: {},
  rooms: {},
  playlists: {},
  tracks: {}
};

export default function(state = initialState, action) {
  const { payload, meta } = action;

  const isApiAction = meta && meta[API];
  const hasData = payload && payload.data;

  if (isApiAction && hasData) {
    return merge({}, state, payload.data.entities);
  }

  return state;
}
