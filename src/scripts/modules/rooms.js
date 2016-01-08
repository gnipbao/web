import { normalize, Schema, arrayOf } from 'normalizr';
import { action, asyncAction, reducer } from 'lib/redux';
import * as api from 'services/rooms';

export const index = asyncAction('rooms.index', api.index);
export const find = asyncAction('rooms.find',
  ({ id }) => api.find(id),
  (id) => ({ id })
);

const initialState = {
  list: [],
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
