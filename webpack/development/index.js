import webpack from 'webpack';
import merge from 'webpack-merge';

import appConfig from '../../config';
import webpackConfig from '../common';

import preLoaders from './preLoaders';
import loaders from './loaders';
import plugins from './plugins';
import devServer from './devServer';

export default merge(webpackConfig, {
  entry: [
    'webpack-dev-server/client?' + appConfig.server.url,
    'webpack/hot/only-dev-server'
  ],
  module: { preLoaders, loaders },
  plugins,
  debug: true,
  cache: true,
  devtool: 'cheap-module-inline-source-map',
  devServer
});
