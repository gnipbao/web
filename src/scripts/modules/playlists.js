import {
  createAction as action,
  createReducer as reducer
} from 'redux-act';

import asyncAction from 'lib/redux/asyncAction';
import * as api from 'services/playlists';

export const index = asyncAction('playlists.index', () => api.index());
export const find = asyncAction('playlists.find',
  ({ id }, _state) => api.find(id),
  (id) => ({ id })
);

const initialState = {
  list: [],
  item: null,
  loading: false
};

export default reducer({
  [index]: (state, { data, error }) => {
    if (!data) return { ...state, loading: true };
    if (error) return state;

    return {
      ...state,
      loading: false,
      list: data
    };
  },

  [find]: (state, { data, error }) => state
}, initialState);
