import { Schema, arrayOf } from 'normalizr';
import { createAction, createReducer } from 'redux-act';

import { API } from 'store/middleware/custom/api';
import * as crud from 'reducers/crud';

const identity = (arg = {}) => arg;
const undef = () => undefined;

export const action = createAction;
export const reducer = createReducer;

export function apiAction(description, request, schema,
  payloadReducer = identity, metaReducer = undef) {
  const meta = { request, schema };

  return createAction(description, payloadReducer,
    (...args) => ({ ...metaReducer(...args), [API]: meta }));
}

export function apiReducer(actions, additionalState = {}) {
  const {
    list, load,
    create, update, destroy,
    ...handlers
  } = actions;

  const result = reducer(handlers, {
    ...crud.initialState,
    ...additionalState
  });

  if (list) result.on(list, crud.list);
  if (load) result.on(load, crud.load);

  return result;
}
