import { Route } from 'react-router';

import setup from './utils/setup';
import * as layouts from 'layouts';
import { notFound, forbidden, signIn } from 'pages';

import adminRoutes from './admin';
import appRoutes from './app';

export const routes = (
  <Route component={layouts.base}>
    <Route path='/sign-in' component={signIn} requireUnauth />

    {adminRoutes}
    {appRoutes}

    <Route path='/forbidden' component={forbidden} status={403} />
    <Route path='*' component={notFound} status={404} />
  </Route>
);

export default store => setup(store, routes);
