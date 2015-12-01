import webpack from 'webpack';
import globals from '../../../config/globals';
import common from './common';

export default [
  ...common,
  new webpack.DefinePlugin({
    ...globals,
    __CLIENT__: true,
    __SERVER__: false
  })
]
