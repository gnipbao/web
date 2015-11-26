import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired
  }

  constructor(props: {
    store: Object;
    history: Object;
    routes: Object;
  }) {
    super(props);
  }

  render() {
    const { store, history, routes } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>{routes}</Router>
      </Provider>
    );
  }
}
