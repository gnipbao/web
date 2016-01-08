import { normalize, Schema, arrayOf } from 'normalizr';
import { action, asyncAction, reducer } from 'lib/redux';
import * as api from 'services/playlists';

export const index = asyncAction('playlists.index', api.index);
export const find = asyncAction('playlists.find',
  ({ id }) => api.find(id), (id) => ({ id })
);

const schema = new Schema('index');
schema.define({
  owner: new Schema('users'),
  provider: new Schema('providers')
});

const initialState = {
  loading: false
};

export default reducer({
  [index]: (state, { data, error }) => {
    if (!data) return { ...state, loading: true };
    if (error) return state;

    return {
      ...state,
      ...normalize(data, arrayOf(schema)),
      loading: false
    };
  },

  [find]: (state, { data, error }) => state
}, initialState);
