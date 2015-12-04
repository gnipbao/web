import merge from 'webpack-merge';

import config from '../../config';
import addHash from '../utils/addHash';
import common from './common';
import loaders from './loaders/client';
import plugins from './plugins/client';

export default merge(common, {
  target: 'web',
  entry: ['./client.js'], 
  output: {
    filename: addHash('[name].js', 'chunkhash'),
    chunkFilename: addHash('chunk.[name].js', 'chunkhash'),

    path: config.paths.public,

    library: 'ClientApp',
    libraryTarget: 'var'
  },
  module: { loaders },
  plugins
});
