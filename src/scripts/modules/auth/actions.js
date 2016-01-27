import { action } from 'lib/redux';
import { routeActions } from 'react-router-redux';

import * as session from 'lib/session';
import * as service from 'services/auth';

import authenticate from './authenticate';

export const loginStart = action('auth.login.start');
export const loginComplete = action('auth.login.complete');
export const loginError = action('auth.login.error');

export const login = (provider, inviteCode) =>
  async (dispatch, getState) => {
    dispatch(loginStart({ provider, inviteCode }));

    try {
      const userData = await authenticate(provider, inviteCode);
      dispatch(loginComplete(userData));

      const { routing: { state } } = getState();
      if (state && state.attempted) {
        dispatch(routeActions.replace(state.attempted));
      } else {
        dispatch(routeActions.replace('/'));
      }
    } catch (error) {
      dispatch(loginError(error));
    }
  };

export const logoutComplete = action('auth.logout.complete');
export const logout = () => async (dispatch) => {
  await service.logout();
  session.logout();
  dispatch(logoutComplete());
};
