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
