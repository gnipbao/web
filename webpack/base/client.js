import merge from 'webpack-merge';

import common from './common';
import plugins from './plugins/client';

export default merge(common, {
  target: 'web',
  entry: ['./client.js'], 
  resolve: [
    extensions: ['.css', '.scss']
  ],
  output: {
    library: 'AppClient',
    libraryTarget: 'var'
  },
  plugins
});
