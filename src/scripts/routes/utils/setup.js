import { Route } from 'react-router';

import walk from './walk';
import onEnter from './onEnter';

export default function(store, routes) {
  function setup(route) {
    route.onEnter = onEnter(route, store);
  }

  return walk(
    Route.createRouteFromReactElement(routes),
    route => setup(route)
  );
}
