import { reducer } from 'lib/redux';
import * as session from 'lib/session';
import {
  loginStart,
  loginError,
  loginComplete,
  logoutComplete
} from './actions';

const initialState = {
  token: session.token(),
  error: null,
  data: null,
  currentUser: null,
  currentUserId: null,
  authenticated: false,
  loading: false
};

export default reducer({
  [loginStart]: s => ({ ...s, error: null, loading: true }),
  [loginError]: (s, { error }) => ({ ...s, error, loading: false }),

  [loginComplete]: (state, { token, data }) => ({
    ...state,
    token,
    data,
    currentUserId: data.sub,
    currentUser: data.user,
    authenticated: true,
    loading: false
  }),

  [logoutComplete]: () => ({ ...initialState, token: null })
}, initialState);
