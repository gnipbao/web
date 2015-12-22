import { stringify } from 'qs';
import {
  createAction as action,
  createReducer as reducer
} from 'redux-act';

import openPopup from 'lib/utils/popup';
import { asyncAction } from 'lib/redux';
import auth from 'services/auth';

function authenticate(provider, code, tab) {
  const name = !!tab ? '_blank' : provider;
  const query = code ? '?' + stringify({ invite_code: code }) : '';
  const url = `${settings.authRoot}/${provider}${query}`;
  const popup = openPopup(provider, url, name);

  return waitCredentials(provider, popup);
}

function waitCredentials(provider, popup) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(function() {
      if (!popup || popup.closed) {
        clearInterval(interval);

        if (popup.closed) reject({ error: 'Login has been cancelled' });
        if (!popup) reject({ error: 'Popup was blocked' });

        reject({ error: 'Unknown' });
      } else {
        try {
          credentials = parseLocation(popup.location);
          if (credentials) resolve({ credentials });
        } catch (err) {}
      }
    }, 100);
  });
}

const loginStart = action('login.login');
const loginComplete = action('login.complete');
const loginError = action('login.error');

export const login = (provider, inviteCode) => async (dispatch) => {
  dispatch(loginStart({ provider, inviteCode }));

  try {
    const credentials = await authenticate(provider, inviteCode);
    dispatch(loginComplete({ credentials }));
  } catch ({ error }) {
    dispatch(loginError({ error }));
  }
};

const initialState = {
  credentials: null,
  loading: false,
  error: null
};

export default reducer({
  [loginStart]: (state, { provider, inviteCode }) => ({
    ...state,
    provider,
    inviteCode,
    loading: true
  }),
  [loginError]: (state, { error }) => ({ ...state, error, loading: false }),
    [loginComplete]: (state, { credentials }) => ({ ...state, credentials, loading: false })
}, initialState);
