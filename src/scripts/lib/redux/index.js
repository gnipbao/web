import { Schema, arrayOf } from 'normalizr';
import { createAction, createReducer } from 'redux-act';

import { API } from 'store/middleware/custom/api';
import * as crud from 'reducers/crud';

const identity = (arg = {}) => arg;
const undef = () => undefined;

export const action = createAction;
export const reducer = createReducer;

export function apiAction(description, api,
  payloadReducer = identity, metaReducer = undef) {

  return createAction(description, payloadReducer,
    (...args) => ({ ...metaReducer(...args), [API]: api }));
}

export function apiReducer(actions, additionalState = {}) {
  const {
    fetch, list,
    create, update, destroy,
    ...handlers
  } = actions;

  const result = reducer(handlers, {
    ...crud.initialState,
    ...additionalState
  });

  if (fetch) result.on(fetch, crud.load);
  if (update) result.on(update, crud.load);
  if (list) result.on(list, crud.list);

  return result;
}
