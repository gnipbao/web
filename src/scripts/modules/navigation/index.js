import { reducer } from 'lib/redux';
import { toggle } from './actions';

export const initialState = {
  expanded: true
};

export default reducer({
  [toggle]: ({ expanded, ...state }) => ({ expanded: !expanded, ...state })
}, initialState);
