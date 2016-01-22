import { action } from 'lib/redux';

export const init = action('environment.init');
export const resize = action(
  'environment.windowResize',
  (width, height) => ({ width, height })
);
