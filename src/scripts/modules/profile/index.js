import { reducer } from 'lib/redux';
import { fetch } from './actions';

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
