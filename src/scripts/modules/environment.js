import { action, reducer } from 'lib/redux';

const initialState = {
  width: null,
  height: null,
  mobile: null
};

export const init = action('environment.init');
export const resize = action(
  'environment.windowResize',
  (width, height) => ({ width, height })
);

export default reducer({
  [init]: (s, { width, height }) => ({ ...s, width, height }),
  [resize]: (s, { width, height }) => ({ ...s, width, height })
}, initialState);
