import {
  createAction as action,
  createReducer as reducer
} from 'redux-act';

export const toggle = action('navigation.toggle');

const initialState = {
  slim: false
};

export default reducer({
  [toggle]: ({ slim, ...state }) => ({ slim: !slim, ...state })
}, initialState);
