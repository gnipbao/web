import mergeWith from 'lodash/mergewith'
import merge from 'lodash/merge'
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

function mergeStrategy(objValue, srcValue) {
  if (isArray(objValue)) {
    return srcValue;
  }
}

export default function(state = initialState, action) {
  const { payload, meta } = action;

  // merge strategy should depend on action type:
  //
  // 1) create
  // 2) fetch/list
  // 3) update
  // 4) destroy

  if (meta && meta[API] && payload && payload.data) {
    return mergeWith({}, state, payload.data.entities, mergeStrategy);
  }

  return state;
}
