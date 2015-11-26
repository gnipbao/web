import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import routes from 'routes';

export default class Root extends Component {
  constructor(props: {
    store: Object;
  }) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ReduxRouter>{routes}</ReduxRouter>
      </Provider>
    );
  }
}
