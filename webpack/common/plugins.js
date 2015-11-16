import path from 'path';
import webpack from 'webpack'

import HtmlPlugin from 'html-webpack-plugin';

import config from '../../config';
import globals from './globals';

const templatePath = path.join(config.paths.templates, 'index.html');

export default [
  new webpack.ProvidePlugin({
    R: 'ramda'
  }),
  new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/),
  new webpack.DefinePlugin(globals),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new HtmlPlugin({
    title: config.name,
    description: config.description,
    template: templatePath,
    hash: true
  })
]
