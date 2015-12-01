import { createAction, createReducer } from 'redux-act';
import { fetchPosts } from 'api/reddit';

const flattenResponse = ({ data: { children } }) =>
  children.map((child) => child.data);

const request = createAction('Reddit request');
const response = createAction('Reddit response', flattenResponse);

export const loadPosts = (reddit) => async (dispatch) => {
  dispatch(request(reddit));
  const json = await fetchPosts(reddit);
  return dispatch(response(json));
};

const initialState = {
  items: [],
  loading: false
};

export default createReducer({
  [request]: s => ({
    ...s,
    items: [],
    loading: true
  }),
  [response]: (s, items) => ({
    ...s,
    loading: false,
    items
  })
}, initialState);
