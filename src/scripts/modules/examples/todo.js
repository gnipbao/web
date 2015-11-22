import { createAction, handleActions } from 'redux-actions';

// TODO: find a better way to reduce such boilerplate!

const TODO_ADD = 'TODO_ADD';
const TODO_DEL = 'TODO_DEL';
const TODO_EDIT = 'TODO_EDIT';
const TODO_COMPLETE = 'TODO_COMPLETE';
const TODO_COMPLETE_ALL = 'TODO_COMPLETE_ALL';
const TODO_CLEAR_COMPLETED = 'TODO_CLEAR_COMPLETED';

export const add = createAction(TODO_ADD);
export const del = createAction(TODO_DEL);
export const edit = createAction(TODO_EDIT);
export const complete = createAction(TODO_COMPLETE);
export const completeAll = createAction(TODO_COMPLETE_ALL);
export const clearCompleted = createAction(TODO_CLEAR_COMPLETED);

const initialState = [
  { id: 0, text: 'Learn react, redux, frp, elm, etc. Write code. Die.', completed: true },
  { id: 1, text: 'Go forth & die!', completed: false }
];

const nextId = state =>
  state.reduce((max, item) => Math.max(item.id, max), -1) + 1;

export default handleActions({

  TODO_ADD: (s, { payload }) => [{
    id: nextId(s),
    text: payload,
    completed: false
  }, ...s],

  TODO_DEL: (s, { payload }) => s.filter(i => i.id !== payload),

  TODO_EDIT: (s, { payload: { id, text } }) => {
    const item = s.find(i => i.id === id);
    return [{ text, ...item }, ...s];
  },

  TODO_COMPLETE: (s, { payload }) => {
    const ix = R.findIndex(R.propEq('id', payload))(s);
    return R.update(ix, R.assoc('completed', !s[ix].completed, s[ix]), s);
  },

  TODO_COMPLETE_ALL: (s) => {
    const completed = !s.every(i => i.completed);
    return s.map(i => ({ completed, ...i }));
  },

  TODO_CLEAR_COMPLETED: (s) => s.filter(i => !i.completed)

}, initialState);
