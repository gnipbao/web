import union from 'lodash/array/union'

import { Schema, arrayOf } from 'normalizr';
import { API } from 'store/middleware/custom/api';
import { createAction, createReducer } from 'redux-act';

const identity = arg => arg;
const undef = () => undefined;

export const action = createAction;
export const reducer = createReducer;

export function apiAction(description, request, schema,
  payloadReducer = identity, metaReducer = undef) {

  return createAction(description,
    (...args) => ({ ...payloadReducer(...args) }),
    (...args) => ({ ...metaReducer(...args), [API]: { request, schema } })
  );
}

const reducers = {
  list: (state, { data, links, error }) => {
    if (!data) return { ...state, loading: true };
    if (error) return { ...state, loading: false };

    return {
      ...state,
      loading: false,
      links,
      pageCount: state.pageCount + 1,
      ids: union(state.ids, data.result)
    };
  },

  load: (state, { data, error }) => {
    return {
      ...state,
      loading: false,
      ids: union(state.ids, [data.result])
    };
  }
};

const initial = {
  loading: false,
  links: {},
  pageCount: 0,
  ids: []
};

export function apiReducer(actions, initialState = initial) {
  const result = createReducer({}, initialState);

  const { list, load } = actions;

  if (list) result.on(list, reducers.list);
  if (load) result.on(load, reducers.load);

  return result;
}
