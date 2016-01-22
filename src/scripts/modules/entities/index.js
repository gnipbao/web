import { API } from 'store/middleware/custom/api';
import merge from './merge';

const initialState = {
  users: {},
  providers: {},
  rooms: {},
  playlists: {},
  tracks: {},
  favorites: {}
};

function isAPI({ payload, meta }) {
  return meta && meta[API] && payload && payload.data;
}

export default function(state = initialState, action) {
  return isAPI(action) ?
    merge(state, action.payload.data.entities) :
    state;
}
