import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import routes from 'routes';

export default class Root extends Component {
  constructor(props: {
    store: Object;
  }) {
    super(props);
  }

  renderDevTools() {
    if (__DEVTOOLS__) {
      const { DevToolsSlider } = require('components/DevTools');
      const createDevToolsWindow = require('utils/createDevToolsWindow');

      return __DEVTOOLS_DOCKABLE__ ?
        <DevToolsSlider /> :
        createDevToolsWindow(this.props.store);
    }
    return null;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ReduxRouter>{routes}</ReduxRouter>
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
