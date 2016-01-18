import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router';
import createRoutes from 'routes';
import ReduxIntlContainer from 'components/redux_intl_container';

export default (history, store) => (
  <Provider store={store}>
    <Router history={history}>
      {createRoutes(store)}
    </Router>
  </Provider>
);
