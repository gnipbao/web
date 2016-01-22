import { reducer } from 'lib/redux';
import {
  init,
  resize
} from './actions';

const initialState = {
  width: null,
  height: null,
  mobile: null
};

const resizeHandler = (s, { width, height }) => ({ ...s, width, height });

export default reducer({
  [init]: resizeHandler,
  [resize]: resizeHandler, 
}, initialState);
