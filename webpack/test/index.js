import webpack from 'webpack';
import merge from 'webpack-merge';

import appConfig from '../../config';
import webpackConfig from '../base/client';

import loaders from './loaders';
import plugins from './plugins';
import externals from './externals';

const noParse = [
  /node_modules\/sinon\//
];

const testWebpackConfig = merge(webpackConfig, {
  module: { loaders, noParse },
  plugins,
  externals,

  debug: true,
  cache: true,

  // source maps are loaded using karma-sourcemap-loader,
  // for more info see https://github.com/webpack/karma-webpack#source-maps
  // and https://github.com/webpack/karma-webpack#source-maps

  devtool: 'inline-source-map'
});

// we should not use output with karma-webpack,
// as karma-webpack doesn't output anything

delete testWebpackConfig.output;

export default testWebpackConfig;
