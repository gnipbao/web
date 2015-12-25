import Qs from 'qs';

import {
  createAction as action,
  createReducer as reducer
} from 'redux-act';

import openPopup from 'lib/utils/popup';
import { session } from 'lib/auth';
import { asyncAction } from 'lib/redux';
import auth from 'services/auth';

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
            resolve({ authToken: params.auth_token });
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

export const logout = asyncAction('auth.logout',
  () => logout(),
  (category, page) => ({ category, page })
);

export const login = (provider, inviteCode) => async (dispatch) => {
  dispatch(loginStart({ provider, inviteCode }));

  try {
    const userData = await authenticate(provider, inviteCode);
    dispatch(loginComplete(userData));
  } catch (error) {
    dispatch(loginError(error));
  }
};

const initialState = {
  authToken: session.token(),
  loading: false,
  timestamp: null,
  error: null
};

export default reducer({
  [loginStart]: (state, { provider, inviteCode }) => ({
    ...state,
    error: null,
    provider,
    inviteCode,
    loading: true
  }),

  [loginError]: (state, { error }) => ({
    ...state,
    error,
    loading: false,
    timestamp: Date.now()
  }),

  [loginComplete]: (state, { authToken }) => {
    session.signIn(authToken);
    return {
      ...state,
      authToken,
      loading: false,
      timestamp: Date.now()
    };
  },

  [logout]: (state) => {
    session.signOut();
    return {
      ...initialState,
      authToken: null,
      timestamp: Date.now()
    };
  }
}, initialState);
