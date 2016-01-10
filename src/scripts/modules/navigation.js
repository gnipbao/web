import { action, reducer } from 'lib/redux';

export const toggle = action('navigation.toggle');

const initialState = {
  slim: false
};

export default reducer({
  [toggle]: ({ slim, ...state }) => ({ slim: !slim, ...state })
}, initialState);
