import canUseDOM from './canUseDOM';

import createHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import useQueries from 'history/lib/useQueries';

const creator = canUseDOM ?
  createHistory :
  createMemoryHistory

export default useQueries(creator)();
