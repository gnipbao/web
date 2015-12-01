import { createAction, createReducer } from 'redux-act';
import { search } from 'api/soundCloud';

// TODO: async flow looks always the same

const request = createAction('SoundCloud request');
const response = createAction('SoundCloud response');

export const loadSounds = (term) =>
  async (dispatch) => {
    dispatch(request({ term }));
    const { items } = await search(term);
    return dispatch(response({ term, items }));
  };

const initialState = {
  term: 'grindcore',
  items: [],
  loading: false
};

export default createReducer({
  [request]: s => ({
    ...s,
    loading: true
  }),
  [response]: (s, { payload: { term, items } }) => ({
    ...s,
    term,
    items,
    loading: false
  })
}, initialState);
