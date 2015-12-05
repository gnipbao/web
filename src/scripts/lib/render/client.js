import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';

const devTools = () => __DEVTOOLS__ ?
  React.createElement(require('components/DevTools')) : null;

export default (history, store) => (
  <Provider store={store}>
    <div>
      <Router history={history}>{routes}</Router>
      {devTools()}
    </div>
  </Provider>
);
