import { Provider } from 'react-redux';
import { Router } from 'react-router';

const { object } = PropTypes;

export default class Root extends Component {
  static propTypes = {
    store: object.isRequired,
    history: object.isRequired,
    routes: object.isRequired
  }

  constructor(props: {
    store: Object;
    history: Object;
    routes: Object;
  }) {
    super(props);
    if (__DEVELOPMENT__ && __CLIENT__) {
      this.devTools = require('components/DevTools');
    }
  }

  renderDevTools() {
    if (__DEVELOPMENT__ && __CLIENT__) {
      return React.createElement(this.devTools);
    }
  }

  render() {
    const { store, history, routes } = this.props;
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
