import webpack from 'webpack';

export default [
  new webpack.IgnorePlugin(/\.json$/),
  new webpack.NoErrorsPlugin()
]
