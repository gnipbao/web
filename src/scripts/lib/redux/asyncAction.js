import { createAction } from 'redux-act';

export default (desc, request, payloadReducer) =>
  createAction(desc, (...args) =>
    ({ ...(payloadReducer(...args)), request }));
