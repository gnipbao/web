import { createAction, handleActions } from 'redux-actions';
import { fetchPosts } from 'api/reddit';

const REQUEST = 'REDDIT_REQUEST';
const RESPONSE = 'REDDIT_RESPONSE';

const flattenResponse = ({ data: { children } }) =>
  children.map((child) => child.data);

const response = createAction(RESPONSE, flattenResponse);
const request = createAction(REQUEST);

export const loadPosts = (reddit) => async (dispatch) => {
  dispatch(request(reddit));
  const json = await fetchPosts(reddit);
  return dispatch(response(json));
};

const initialState = {
  items: [],
  loading: false
};

export default handleActions({
  [REQUEST]: s => ({ ...s, items: [], loading: true }),
  [RESPONSE]: (s, { payload }) => ({ ...s, loading: false, items: payload })
}, initialState);
