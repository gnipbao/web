import { createAction, handleActions } from 'redux-actions';

import { fetchPosts } from 'api/reddit';

const REDDIT_REQUEST = 'REDDIT_REQUEST';
const REDDIT_RESPONSE = 'REDDIT_RESPONSE';

const response = createAction(
  REDDIT_RESPONSE,
  ({ data: { children } }) => children.map((child) => child.data)
);

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
  REDDIT_REQUEST: (s) => ({ ...s, loading: true }),
  REDDIT_RESPONSE: (s, { payload }) => {
    return { loading: false, items: payload };
  }
}, initialState);
