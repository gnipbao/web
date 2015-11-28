import path from 'path';
import debug from 'debug';
import webpack from 'webpack'

import HtmlPlugin from 'html-webpack-plugin';

import config from '../../config';
import globals from './globals';

const log = debug('app');
const template = path.join(config.paths.templates, 'index.html');

log('globals:\n', globals);

export default [
  new webpack.ProvidePlugin({
    React: 'react',
    ReactDOM: 'react-dom',
    R: 'ramda'
  }),
  new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/),
  new webpack.DefinePlugin(globals),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new HtmlPlugin({
    title: config.name,
    description: config.description,
    template,
    hash: true
  })
]
