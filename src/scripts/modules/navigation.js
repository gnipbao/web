import { action, reducer } from 'lib/redux';

export const toggle = action('navigation.toggle');

const initialState = {
  expanded: true
};

export default reducer({
  [toggle]: ({ expanded, ...state }) => ({ expanded: !expanded, ...state })
}, initialState);
