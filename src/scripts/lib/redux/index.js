import {
  createAction,
  createReducer
} from 'redux-act';

const identity = f => f;

export const action = createAction;
export const apiAction = (desc, request, payloadReducer = identity) =>
  createAction(desc, (...args) => ({ ...(payloadReducer(...args)), request }));

export const reducer = createReducer;
