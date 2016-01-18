import { useRouterHistory } from 'react-router';

export default (
  __SERVER__ ?
    useRouterHistory(require('history/lib/createMemoryHistory'))() :
    require('react-router').browserHistory
);
