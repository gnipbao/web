import {
  createAction as action,
  createReducer as reducer
} from 'redux-act';

export const add = action('todo.add');
export const del = action('todo.del');
export const edit = action('todo.edit', (id, text) => ({ id, text }));
export const complete = action('todo.complete');
export const completeAll = action('todo.completeAll');
export const clearCompleted = action('todo.clearCompleted');

export const initialState = [
  { id: 0, text: 'Learn react, redux, frp, elm, etc', completed: true },
  { id: 1, text: 'Write code', completed: true },
  { id: 2, text: 'Die', completed: false }
];

const nextId = state =>
  state.reduce((max, item) => Math.max(item.id, max), -1) + 1;

export default reducer({
  [add]: (s, text) => [{
    id: nextId(s),
    text,
    completed: false
  }, ...s],

  [del]: (s, id) => s.filter(i => i.id !== id),

  [edit]: (s, { id, text }) => 
    s.map(i => i.id === id ? { ...i, text } : i),

  [complete]: (s, id) =>
    s.map(i => i.id === id ? { ...i, completed: !i.completed } : i),

  [completeAll]: (s) => {
    const completed = !s.every(i => i.completed);
    return s.map(i => ({ ...i, completed }));
  },

  [clearCompleted]: (s) => s.filter(i => !i.completed)
}, initialState);
