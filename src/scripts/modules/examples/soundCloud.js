import { createAction, handleActions } from 'redux-actions';
import { search } from 'api/soundCloud';

// TODO: async flow looks always the same

const REQUEST = 'SC_REQUEST';
const RESPONSE = 'SC_RESPONSE';

const request = createAction(REQUEST);
const response = createAction(RESPONSE);

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

export default handleActions({
  [REQUEST]: s => ({ ...s, loading: true }),
  [RESPONSE]: (s, { payload: { term, items } }) => ({
    ...s,
    term,
    items,
    loading: false
  })
}, initialState);
