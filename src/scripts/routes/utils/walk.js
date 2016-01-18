export default function walk(routes, cb) {
  cb(routes);

  if (routes.indexRoute) {
    cb(routes.indexRoute);
  }

  if (routes.childRoutes) {
    routes.childRoutes.forEach(route => walk(route, cb));
  }

  return routes;
}
