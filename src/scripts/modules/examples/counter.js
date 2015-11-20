import { createAction, handleActions } from 'redux-actions';

const COUNTER_INC = 'COUNTER_INC';
const COUNTER_DEC = 'COUNTER_DEC';

export const inc = createAction(COUNTER_INC);
export const dec = createAction(COUNTER_DEC);

const initialState = 0;

export default handleActions({
  COUNTER_INC: (s) => s + 1,
  COUNTER_DEC: (s) => s - 1
}, initialState);
