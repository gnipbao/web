import { apiAction, action, reducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/profile';

export const reset = action('profile.reset');
export const load = apiAction('profile.load', service.load, schemas.user);

const initialState = {
  data: {},
  loading: false
};

export default reducer({
  [reset]: (state) => initialState,
  [load]: (state, { data, error }) => {
    if (!data) return { ...state, loading: true };
    if (error) return { ...state, loading: false };

    return {
      ...state,
      loading: false,
      data
    };
  }
}, initialState);
