import { apiReducer } from 'lib/redux';
import { crud } from 'reducers';
import filters from './filters';
import { filter, fetch, list, room } from './actions';

export const initialState = {
  filter: filters.all,
  searchQuery: null,
  users: {}
};

const handlers = {
  [filter]: (state, { filter }) => ({ ...state, filter }),
  [room.enter]: crud.load,
  [room.exit]: crud.load
};

export default apiReducer({
  fetch,
  list,
  ...handlers
}, initialState);
