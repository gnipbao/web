import { Route, IndexRoute } from 'react-router';

import Layout from 'layouts/Main';
import NotFound from 'pages/NotFound';

import Home from 'pages/Home';
import About from 'pages/About';

import SignIn from 'pages/auth/SignIn';

export { default as getStatus } from './getStatus';

/**
 * please keep routes in logical order
 */
export default (
  <Route path='/' component={Layout}>
    { /* default */ }
    <IndexRoute component={Home} />

    { /* pages */ }
    <Route path='about' component={About} />
    <Route path='sign-in' component={SignIn} />

    { /* catch all */ }
    <Route path='*' component={NotFound} status={404} />
  </Route>
);
