import { createAction, handleActions } from 'redux-actions';
import { fetchPosts } from 'api/reddit';

const REDDIT_REQUEST = 'REDDIT_REQUEST';
const REDDIT_RESPONSE = 'REDDIT_RESPONSE';

const flattenResponse = ({ data: { children } }) =>
  children.map((child) => child.data);

const response = createAction(REDDIT_RESPONSE, flattenResponse);
const request = createAction(REDDIT_REQUEST);

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
  REDDIT_REQUEST: s => ({ ...s, items: [], loading: true }),
  REDDIT_RESPONSE: (s, { payload }) => ({ loading: false, items: payload })
}, initialState);
