import merge from 'webpack-merge';

import common from './common';
import loaders from './loaders/client';
import plugins from './plugins/client';

export default merge(common, {
  target: 'web',
  entry: ['./client.js'], 
  resolve: {
    extensions: ['.css', '.scss']
  },
  output: {
    library: 'ClientApp',
    libraryTarget: 'var'
  },
  module: { loaders },
  plugins
});
