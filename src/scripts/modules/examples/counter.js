import { createAction, handleActions } from 'redux-actions';
import undoable, { includeAction } from 'redux-undo';

import km from 'lib/keyMirror';

const INC = 'COUNTER_INC';
const DEC = 'COUNTER_DEC';

const UNDO = 'COUNTER_UNDO';
const REDO = 'COUNTER_REDO';

export const inc = createAction(INC);
export const dec = createAction(DEC);
export const undo = createAction(UNDO);
export const redo = createAction(REDO);

const initialState = 0;

const reducer = handleActions({
  [INC]: (s) => s + 1,
  [DEC]: (s) => s - 10
}, initialState);

export default undoable(reducer, {
  undoType: UNDO,
  redoType: REDO,
  filter: includeAction([INC, DEC]),
  debug: __DEVELOPMENT__
});
