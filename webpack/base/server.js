import merge from 'webpack-merge';

import common from './common';
import plugins from './plugins/server';

export default merge(common, {
  target: 'node',
  entry: ['./server.js'],
  output: {
    library: 'AppServer',
    libraryTarget: 'commonjs2'
  },

  // disable node mocks & polyfills
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  plugins
});
