import mergeWith from 'lodash/mergewith'
import isArray from 'lodash/isArray';

import { API } from 'store/middleware/custom/api';

const initialState = {
  users: {},
  providers: {},
  rooms: {},
  playlists: {},
  tracks: {},
  favorites: {}
};

function merger(objValue, srcValue) {
  if (isArray(objValue)) {
    return srcValue;
  }
}

export default function(state = initialState, action) {
  const { payload, meta } = action;

  if (meta && meta[API] && payload && payload.data) {
    return mergeWith({}, state, payload.data.entities, merger);
  }

  return state;
}
