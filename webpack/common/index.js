import config from '../../config';

import addHash from '../utils/addHash';

import loaders from './loaders';
import plugins from './plugins';
import toolbox from './toolbox';
import postcss from './postcss';
import eslint from './eslint';

const noParse = Object.values(config.dependencies);

export default {
  name: config.name,
  target: 'web',

  context: config.paths.scripts,
  entry: ['./index.js'], 

  resolve: {
    root: config.paths.root,
    alias: config.aliases,
    modulesDirectories: ['node_modules'],
    extensions: ['', '.jsx', '.js', '.css', '.scss', '.json'],
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*']
  },

  output: {
    path: config.paths.dist,
    filename: addHash('[name].js', 'chunkhash'),
    chunkFilename: addHash('chunk.[name].js', 'chunkhash'),

    library: 'App',
    libraryTarget: 'var',

    publicPath: '/'
  },

  module: { loaders, noParse },
  plugins,

  toolbox,
  postcss,
  eslint,

  profile: config.argv.profile
}
