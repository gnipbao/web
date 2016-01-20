import { apiAction, action, reducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/profile';

export const fetch = apiAction(
  'profile.api.fetch', {
    request: service.fetch,
    schema: schemas.user,
  }, id => ({ id })
);

const initialState = {
  id: null,
  loading: false
};

export default reducer({
  [fetch]: (state, { data, error }) => {
    if (!data) return { ...state, loading: true };
    if (error) return { ...state, loading: false };

    return {
      ...state,
      loading: false,
      id: data.result
    };
  }
}, initialState);
