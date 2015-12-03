import merge from 'webpack-merge';

import common from './common';
import loaders from './loaders/server';
import plugins from './plugins/server';

export default merge(common, {
  target: 'node',
  bail: true,
  externals: /^[a-z][a-z\.\-0-9]*$/,
  entry: ['./server/index.js'],
  module: { loaders },
  plugins,
  output: {
    filename: 'server.js',
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
  }
});
