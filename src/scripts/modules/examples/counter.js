import { createAction, handleActions } from 'redux-actions';
import undoable, { includeAction } from 'redux-undo';

import km from 'lib/keyMirror';

const COUNTER_INC = 'COUNTER_INC';
const COUNTER_DEC = 'COUNTER_DEC';

const COUNTER_UNDO = 'COUNTER_UNDO';
const COUNTER_REDO = 'COUNTER_REDO';

export const inc = createAction(COUNTER_INC);
export const dec = createAction(COUNTER_DEC);

export const undo = createAction(COUNTER_UNDO);
export const redo = createAction(COUNTER_REDO);

const initialState = 0;

const reducer = handleActions({
  COUNTER_INC: (s) => s + 1,
  COUNTER_DEC: (s) => s - 1
}, initialState);

export default undoable(reducer, {
  undoType: COUNTER_UNDO,
  redoType: COUNTER_REDO,
  filter: includeAction([COUNTER_INC, COUNTER_DEC]),
  debug: __DEVELOPMENT__
});
