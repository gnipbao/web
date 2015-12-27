import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createRoutes from 'routes';

export default (history, store) => (
  <Provider store={store}>
    <Router history={history}>{createRoutes(store)}</Router>
  </Provider>
);
