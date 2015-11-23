/* @flow */

import React, { PropTypes, Component } from 'react';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';

import Layout from '../layouts/Main';

export default class Root extends Component {
  constructor(props: {
    store: Object;
    router: Object;
  }) {
    super(props)
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
