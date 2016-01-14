import { getPrefetchedData, getDeferredData } from 'react-fetcher';

export default function(route, store) {
  const { dispatch, getState } = store;

  return async (nextState, replaceState) => {
    let state = getState();
    let { auth: { authenticated, currentUser } } = state;
    let { params, location } = nextState;

    if (route.requireAuth && !authenticated) {
      replaceState({ attempted: location.pathname + location.search }, '/sign-in');
    } else if (route.requireUnauth && authenticated) {
      replaceState(null, '/rooms');
    } else if (route.requireRoles) {
      if (!route.requireRoles.includes(currentUser.role)) {
        replaceState(null, '/forbidden');
      }
    } else {
      const locals = {
        state,
        params,
        dispatch: store.dispatch,
        path: location.pathname,
        query: location.query,
      };

      await getPrefetchedData([route.component], locals);
      if (__CLIENT__) await getDeferredData([route.component], locals);
    }
  };
}
