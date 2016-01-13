import { Schema, arrayOf } from 'normalizr';
import { API } from 'store/middleware/custom/api';
import * as apiReducers from 'reducers/api';
import { createAction, createReducer } from 'redux-act';

const identity = (arg = {}) => arg;
const undef = () => undefined;

export const action = createAction;
export const reducer = createReducer;

export function apiAction(description, request, schema,
  payloadReducer = identity, metaReducer = undef) {
  const apiMeta = { request, schema };

  return createAction(description, payloadReducer,
    (...args) => ({ ...metaReducer(...args), [API]: apiMeta }));
}

const initial = {
  loading: false,
  links: {},
  pageCount: 0,
  ids: []
};

export function apiReducer(actions, initialState = initial) {
  const { list, load, ...handlers } = actions;
  const result = createReducer(handlers, initialState);

  if (list) result.on(list, apiReducers.list);
  if (load) result.on(load, apiReducers.load);

  return result;
}
