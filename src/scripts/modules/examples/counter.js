import { createAction, createReducer } from 'redux-act';

// HINT: createAction won't generate ids if desc is a valid constant
// (if it matches a constant regexp, see createAction source code)

export const inc = createAction('counter/inc');
export const dec = createAction('counter/dec');

export const initialState = 0;

export default createReducer({
  [inc]: s => s + 1,
  [dec]: s => s - 1
}, initialState);
