import useQueries from 'history/lib/useQueries';
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';

export default (
  __SERVER__ ?
    useQueries(require('history/lib/createMemoryHistory'))() :
    useStandardScroll(useQueries(require('history/lib/createBrowserHistory')))()
);
