import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import addHash from '../../utils/addHash';

export default [
  new ExtractTextPlugin(addHash('[name].css', 'contentHash')),
]
