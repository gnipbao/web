import Qs from 'qs';
import jwtDecode from 'jwt-decode';
import { replacePath } from 'redux-simple-router';

import { action, reducer } from 'lib/redux';
import openPopup from 'lib/utils/popup';
import session from 'lib/session';

function authenticate(provider, code, tab) {
  const name = !!tab ? '_blank' : provider;
  const query = code ? '?' + Qs.stringify({ invite_code: code }) : '';
  const url = `${settings.authRoot}/${provider}${query}`;
  const popup = openPopup(provider, url, name);

  return waitRedirect(provider, popup);
}

function waitRedirect(provider, popup) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (!popup || popup.closed) {
        clearInterval(interval);

        if (!popup) reject({ error: 'Popup was blocked.' });
        if (popup.closed) reject({ error: 'Login has been cancelled.' });

        reject({ error: 'Error. Please, try again.' });
      } else {
        try {
          const params = Qs.parse(popup.location.search.slice(1));
          if (params.auth_token || params.error) popup.close();
          if (params.auth_token) {
            const token = params.auth_token;
            const data = jwtDecode(token);
            session.signIn(token);
            resolve({ token, data });
          } else if (params.error) {
            reject({ error: params.error });
          }
        } catch (err) {}
      }
    }, 100);
  });
}

const loginStart = action('auth.login.start');
const loginComplete = action('auth.login.complete');
const loginError = action('auth.login.error');

export const logout = action('auth.logout', () => session.signOut());

export const login = (provider, inviteCode) =>
  async (dispatch, getState) => {
    dispatch(loginStart({ provider, inviteCode }));

    try {
      const userData = await authenticate(provider, inviteCode);
      dispatch(loginComplete(userData));

      const { routing: { state } } = getState();
      if (state && state.attempted) {
        dispatch(replacePath(state.attempted));
      } else {
        dispatch(replacePath('/rooms'));
      }
    } catch (error) {
      dispatch(loginError(error));
    }
  };

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
  [loginStart]: (state) => ({
    ...state,
    error: null,
    loading: true
  }),

  [loginError]: (state, { error }) => ({
    ...state,
    error,
    loading: false
  }),

  [loginComplete]: (state, { token, data }) => ({
    ...state,
    token,
    data,
    currentUserId: data.sub,
    currentUser: data.user,
    authenticated: true,
    loading: false
  }),

  [logout]: () => ({
    ...initialState,
    token: null
  })
}, initialState);
