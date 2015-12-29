import { Route, IndexRoute } from 'react-router';
import { replacePath } from 'redux-simple-router';
import { getDeferredData } from 'react-fetcher';

import walk from './walk';

export { default as getStatus } from './getStatus';

import * as layouts from 'layouts';
import {
  notFound,
  forbidden,
  signIn,
  about,
  rooms,
  profiles,
  admin,
} from 'pages';

/**
 * please keep routes in logical order
 */
export const routes = (
  <Route component={layouts.base}>
    <Route path='/sign-in' component={signIn} requireUnauth/>

    <Route path='/admin' component={layouts.admin}
      requireAuth
      requireRoles={['moderator', 'admin', 'developer']}>

      <IndexRoute components={admin.dashboard} />

      <Route path='/users' component={admin.users.list} />
      <Route path='/users/:id' component={admin.users.show} />
      <Route path='/users/:id/new' component={admin.users.create} />
      <Route path='/users/:id/edit' component={admin.users.edit} />
    </Route>

    <Route component={layouts.app} requireAuth>
      <Route path='/rooms' component={rooms.list} />
      <Route path='/rooms/:id' component={rooms.show} />
      <Route path='/rooms/:id/new' component={rooms.create} />
      <Route path='/rooms/:id/edit' component={rooms.edit} />

      <Route path='/profile' component={profiles.show} />
      <Route path='/profile/edit' component={profiles.edit} />
      <Route path='/profile/:id' component={profiles.show} />

      <Route path='/about' component={about} />
    </Route>

    <Route path='/forbidden' component={forbidden} status={403} />
    <Route path='*' component={notFound} status={404} />
  </Route>
);

export default store => walk(
  Route.createRouteFromReactElement(routes),
  route => {
    const { dispatch, getState } = store;
    route.onEnter = async (nextState, replaceState) => {
      const state = getState();
      const { auth: { authenticated } } = state;
      const { location } = nextState;

      if (route.requireAuth && !authenticated) {
        replaceState({ attempted: location.pathname + location.search }, '/sign-in');
      } else if (route.requireUnauth && authenticated) {
        replaceState(null, '/rooms');
      } else if (route.requireRoles) {
        // TODO: check if user has role
        replaceState(null, '/forbidden');
      } else if (__CLIENT__) {
        const locals = {
          path: location.pathname,
          query: location.query,
          state,
          dispatch: store.dispatch,
        };

        await getDeferredData([route.component], locals);
      }
    };
  }
);
