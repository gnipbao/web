import { createAction } from 'redux-act';

const identity = f => f;

export default (desc, request, payloadReducer = identity) =>
  createAction(desc, (...args) =>
    ({ ...(payloadReducer(...args)), request }));
