import React, { PropTypes, Component } from 'react';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';

import Layout from 'layouts/Main';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  }

  renderDevTools() {
    if (__DEVTOOLS__) {
      const { DevToolsLogDockable } = require('components/DevTools');
      const createDevToolsWindow = require('utils/createDevToolsWindow');

      return __DEVTOOLS_DOCKABLE__ ?
        <DevToolsLogDockable /> :
        createDevToolsWindow(this.props.store);
    }
    return null;
  }

  render() {
    const { router, store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <RouterProvider router={router}>
            <Layout />
          </RouterProvider>
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
