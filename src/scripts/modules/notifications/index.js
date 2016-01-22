import reject from 'lodash/reject';
import { action, reducer } from 'lib/redux';
import { create, destroy } from './actions';

const initialState = [];

export default reducer({
  [create]: (s, payload) => [...s, payload],
  [destroy]: (s, payload) => reject(s, ({ id }) => id === payload)
}, initialState);
