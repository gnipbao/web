import { action, asyncAction, reducer } from 'lib/redux';
import * as api from 'services/users';

export const find = asyncAction('users.find',
  ({ id }) => api.find(id),
  (id) => ({ id })
);

const initialState = {
  data: {},
  loading: false
};

export default reducer({
}, initialState);
