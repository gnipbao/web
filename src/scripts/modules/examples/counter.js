import { createAction, createReducer } from 'redux-act';

// HINT: createAction won't generate ids if desc is a valid constant
// (if it matches a constant regexp, see createAction source code)

const INC = 'COUNTER_INC';
const DEC = 'COUNTER_DEC';

export const [inc, dec] = [INC, DEC].map(createAction);

const initialState = 0;

export default createReducer({
  [inc]: s => s + 1,
  [dec]: s => s - 1
}, initialState);
