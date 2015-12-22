import { createAction } from 'redux-act';

export default (desc, request, payloadReducer = f => f) =>
  createAction(desc, (...args) =>
    ({ ...(payloadReducer(...args)), request }));
