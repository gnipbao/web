import { syncReduxAndRouter } from 'redux-simple-router';

import { create } from 'store';
import Root from 'containers/Root';

import history from 'lib/history';

const initialState = window.__state || {};
const store = create(initialState);

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />,
  document.getElementById('root')
);
