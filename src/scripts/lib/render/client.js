import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router';
import createRoutes from 'routes';
import ReduxIntlContainer from 'components/ReduxIntlContainer';

export default (history, store) => (
  <Provider store={store}>
    <Router history={history}>{createRoutes(store)}</Router>
  </Provider>
);
