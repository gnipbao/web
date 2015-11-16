import { Router5 } from 'router5';

import plugins from './plugins';

export default (routes = [], options = {}) => {
  const router = new Router5(routes, options);
  plugins.forEach(::router.usePlugin);
  return router;
};
