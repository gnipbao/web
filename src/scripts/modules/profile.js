import {
  createAction as action,
  createReducer as reducer
} from 'redux-act';

import asyncAction from 'lib/redux/asyncAction';
import * as api from 'services/profile';

export const reset = action('profile.reset');
export const index = asyncAction('profile.index', () => api.index());

const initialState = {
  data: {},
  loading: false
};

export default reducer({
  [reset]: (state) => initialState,
  [index]: (state, { data, error }) => {
    if (!data) return { ...state, loading: true };
    if (error) return state;

    return {
      ...state,
      loading: false,
      data
    };
  }
}, initialState);
