import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from 'routes';

const { object } = PropTypes;

export default class Root extends Component {
  static propTypes = {
    store: object.isRequired,
    history: object.isRequired
  }

  constructor(props: {
    store: Object;
    history: Object;
  }) {
    super(props);
    if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
      this.devTools = require('components/DevTools');
    }
  }

  renderDevTools() {
    if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
      return React.createElement(this.devTools);
    }
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {routes}
          </Router>
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
