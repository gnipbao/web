import globals from '../../../config/globals';
import common from './common';

export default [
  ...common,
  new webpack.DefinePlugin({
    ...config.globals,
    __CLIENT__: true,
    __SERVER__: false
  })
]
