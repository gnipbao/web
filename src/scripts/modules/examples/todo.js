import { createAction, createReducer } from 'redux-act';
import undoable, { includeAction } from 'redux-undo';

const ADD = 'TODO_ADD';
const DEL = 'TODO_DEL';
const EDIT = 'TODO_EDIT';
const COMPLETE = 'TODO_COMPLETE';
const COMPLETE_ALL = 'TODO_COMPLETE_ALL';
const CLEAR_COMPLETED = 'TODO_CLEAR_COMPLETED';

const UNDO = 'TODO_UNDO';
const REDO = 'TODO_REDO';

export const [
  add,
  del,
  edit,
  complete,
  completeAll,
  clearCompleted
] = [
  ADD,
  DEL,
  EDIT,
  COMPLETE,
  COMPLETE_ALL,
  CLEAR_COMPLETED
].map(createAction);

export const [undo, redo] = [UNDO, REDO].map(createAction);

const initialState = [
  { id: 0, text: 'Learn react, redux, frp, elm, etc', completed: true },
  { id: 1, text: 'Write code', completed: true },
  { id: 2, text: 'Die', completed: false }
];

const nextId = state =>
  state.reduce((max, item) => Math.max(item.id, max), -1) + 1;

const reducer = createReducer({
  [add]: (s, text) => [{
    id: nextId(s),
    text,
    completed: false
  }, ...s],

  [del]: (s, id) => s.filter(i => i.id !== id),

  [edit]: (s, { id, text }) => {
    const item = s.find(i => i.id === id);
    return [{ text, ...item }, ...s];
  },

  [complete]: (s, id) =>
    s.map(i => i.id === id ? { ...i, completed: !i.completed } : i ),

  [completeAll]: (s) => {
    const completed = !s.every(i => i.completed);
    return s.map(i => ({ completed, ...i }));
  },

  [clearCompleted]: (s) => s.filter(i => !i.completed)
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
