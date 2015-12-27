import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';

export default (
  __SERVER__ ?
    require('history/lib/createMemoryHistory')() :
    useStandardScroll(require('history/lib/createBrowserHistory'))()
);
