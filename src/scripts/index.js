import ReactDOM from 'react-dom';
import { syncReduxAndRouter } from 'redux-simple-router';

import { create } from 'store';
import Root from 'containers/Root';

import history from 'lib/history';
import routes from 'routes';

const initialState = Immutable(window.__state || {});
const store = create(initialState);

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Root
    store={store}
    history={history}
    routes={routes}
  />,
  document.getElementById('root')
);
