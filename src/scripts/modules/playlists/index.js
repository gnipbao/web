import { apiReducer } from 'lib/redux';
import { crud } from 'reducers';
import { fetch, list, tracks } from './actions';

const handlers = {
  [tracks.list]: crud.nested('tracks', crud.list)
};

const initialState = {
  tracks: {}
};

export default apiReducer({
  list,
  fetch,
  ...handlers
}, initialState);
