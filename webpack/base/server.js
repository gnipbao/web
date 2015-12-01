import merge from 'webpack-merge';

import common from './common';
import loaders from './loaders/server';
import plugins from './plugins/server';

export default merge(common, {
  target: 'node',
  entry: ['./server/index.js'],
  module: { loaders },
  output: {
    library: 'ServerApp',
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
