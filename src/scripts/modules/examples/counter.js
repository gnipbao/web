import { createAction, createReducer } from 'redux-act';
import undoable, { includeAction } from 'redux-undo';

// HINT: createAction won't generate ids if desc is a valid constant
// (if it matches a constant regexp, see createAction source code)

const INC = 'COUNTER_INC';
const DEC = 'COUNTER_DEC';

const UNDO = 'COUNTER_UNDO';
const REDO = 'COUNTER_REDO';

export const [inc, dec] = [INC, DEC].map(createAction);
export const [undo, redo] = [UNDO, REDO].map(createAction);

const initialState = 0;

const reducer = createReducer({
  [inc]: s => s + 1,
  [dec]: s => s - 1
}, initialState);

export default undoable(reducer, {
  undoType: UNDO,
  redoType: REDO,
  filter: includeAction([INC, DEC]),
  debug: __DEVELOPMENT__
});
