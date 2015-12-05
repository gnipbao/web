import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';

const devTools = () => __DEVTOOLS__ && __CLIENT__ ?
  React.createElement(require('components/DevTools')) :
  null;

export default (history, store) => (
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>
);
