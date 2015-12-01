import dude from 'debug-dude';
import path from 'path';
import webpack from 'webpack'

import config from '../../config';

const { log } = dude('app');
const template = path.join(config.paths.templates, 'index.html');

log('globals:\n', config.globals);

export default [
  new webpack.ProvidePlugin({
    React: 'react',
    ReactDOM: 'react-dom',
    R: 'ramda',
    fetch: 'isomorphic-fetch',
    dude: 'debug-dude'
  }),
  new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin()
]
