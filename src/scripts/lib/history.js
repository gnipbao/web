import canUseDOM from './canUseDOM';

import createHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import useQueries from 'history/lib/useQueries';
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';

export default (
  canUseDOM ?
    useStandardScroll(useQueries(createHistory))() :
    useQueries(createMemoryHistory)()
);
