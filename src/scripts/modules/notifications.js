import reject from 'lodash/reject';
import { action, reducer } from 'lib/redux';

export const TIMEOUT_DEFAULT = 5000;

export const create = action(
  'notification.create',
  (type, message, title, timeout = TIMEOUT_DEFAULT) => ({
    id: new Date().getTime(),
    type, message, title, timeout
  })
);

export const destroy = action('notification.destroy');

const initialState = [];

export default reducer({
  [create]: (s, payload) => [...s, payload],
  [destroy]: (s, payload) => reject(s, ({ id }) => id === payload)
}, initialState);
