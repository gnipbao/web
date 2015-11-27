import { Route, IndexRoute } from 'react-router';

import Layout from 'layouts/Main';
import NotFound from 'pages/NotFound';

import Home from 'pages/Home';
import Demo from 'pages/Demo';
import About from 'pages/About';

import Counter from 'examples/Counter';
import Todo from 'examples/Todo';
import FiveHundred from 'examples/500px';
import Reddit from 'examples/Reddit';
import Life from 'examples/Life';
import SoundCloud from 'examples/SoundCloud';

/**
 * please keep routes in logical order
 */
export default (
  <Route path='/' component={Layout}>
    { /* default */ }
    <IndexRoute component={Home} />

    { /* pages */ }
    <Route path='examples' component={Demo}>
      <Route path='counter' component={Counter} />
      <Route path='todo' component={Todo} />
      <Route path='500px' component={FiveHundred} />
      <Route path='reddit' component={Reddit} />
      <Route path='life' component={Life} />
      <Route path='sound-cloud' component={SoundCloud} />
    </Route>
    <Route path='about' component={About} />

    { /* catch all */ }
    <Route path='*' component={NotFound} status={404} />
  </Route>
);
