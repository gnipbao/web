import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';

import { argv, sourceMap } from '../../config';
import addHash from '../utils/addHash';

const plugins = [
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  new webpack.optimize.AggressiveMergingPlugin(),
  new ExtractTextPlugin(addHash('[name].css', 'contentHash')),
  new StatsPlugin('webpack.stats.json')
];

if (!argv.beauty) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap,
      minimize: false,
      compress: {
        screw_ie8: true,
        warnings: false,
        unsafe: true,
        drop_console: true
      }
    })
  );
}

export default plugins;
