import webpack from 'webpack';
import StatsPlugin from 'stats-webpack-plugin';

import { resolve, sourceMap } from '../../../config';
import common from './common';

export default [
  ...common,
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap,
    minimize: false,
    compress: {
      screw_ie8: true,
      warnings: false,
      unsafe: true,
      drop_console: true
    }
  }),
  new StatsPlugin('../webpack.stats.json')
]
