import logger from 'debug-dude';
import { render as prettyjson } from 'prettyjson';
import path from 'path';
import webpack from 'webpack'

import config from '../../../config';

export default [
  new webpack.ProvidePlugin({
    React: 'react',
    ReactDOM: 'react-dom',
    ReactDOMServer: 'react-dom/server',
    R: 'ramda',
    // fetch: 'isomorphic-fetch',
    dude: 'debug-dude',
    Helmet: 'react-helmet',
  }),
  new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin()
]
