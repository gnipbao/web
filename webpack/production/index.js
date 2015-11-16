import merge from 'webpack-merge';

import { sourceMap } from '../../config';
import webpackConfig from '../common';

import vendors from './vendors';
import loaders from './loaders';
import plugins from './plugins';

export default merge(webpackConfig, {
  entry: { app: ['./index.js'], vendors },
  devtool: sourceMap && 'source-map',
  module: { loaders },
  plugins 
});
