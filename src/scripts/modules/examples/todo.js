import { createAction, handleActions } from 'redux-actions';
import undoable, { includeAction } from 'redux-undo';

// TODO: find a better way to reduce such boilerplate!

const ADD = 'TODO_ADD';
const DEL = 'TODO_DEL';
const EDIT = 'TODO_EDIT';
const COMPLETE = 'TODO_COMPLETE';
const COMPLETE_ALL = 'TODO_COMPLETE_ALL';
const CLEAR_COMPLETED = 'TODO_CLEAR_COMPLETED';

const UNDO = 'TODO_UNDO';
const REDO = 'TODO_REDO';

export const add = createAction(ADD);
export const del = createAction(DEL);
export const edit = createAction(EDIT);
export const complete = createAction(COMPLETE);
export const completeAll = createAction(COMPLETE_ALL);
export const clearCompleted = createAction(CLEAR_COMPLETED);

export const undo = createAction(UNDO);
export const redo = createAction(REDO);

const initialState = [
  { id: 0, text: 'Learn react, redux, frp, elm, etc', completed: true },
  { id: 1, text: 'Write code', completed: true },
  { id: 2, text: 'Die', completed: false }
];

const nextId = state =>
  state.reduce((max, item) => Math.max(item.id, max), -1) + 1;

const reducer = handleActions({
  [ADD]: (s, { payload }) => [{
    id: nextId(s),
    text: payload,
    completed: false
  }, ...s],

  [DEL]: (s, { payload }) => s.filter(i => i.id !== payload),

  [EDIT]: (s, { payload: { id, text } }) => {
    const item = s.find(i => i.id === id);
    return [{ text, ...item }, ...s];
  },

  [COMPLETE]: (s, { payload }) =>
    s.map(i => i.id === payload ? { ...i, completed: !i.completed } : i ),

  [COMPLETE_ALL]: (s) => {
    const completed = !s.every(i => i.completed);
    return s.map(i => ({ completed, ...i }));
  },

  [CLEAR_COMPLETED]: (s) => s.filter(i => !i.completed)
}, initialState);

export default undoable(reducer, {
  undoType: UNDO,
  redoType: REDO,

  filter: includeAction([
    ADD,
    DEL,
    EDIT,
    COMPLETE,
    COMPLETE_ALL,
    CLEAR_COMPLETED
  ]),

  debug: __DEVELOPMENT__
});
