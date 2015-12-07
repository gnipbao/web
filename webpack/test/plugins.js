import webpack from 'webpack';
import globals from '../../config/globals';

export default [
  new webpack.IgnorePlugin(/\.json$/),
  new webpack.NoErrorsPlugin()
]
