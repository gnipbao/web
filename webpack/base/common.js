import dude from 'debug-dude';

import config from '../../config';
import addHash from '../utils/addHash';
import toolbox from './toolbox';
import postcss from './postcss';
import eslint from './eslint';

const { log } = dude('app');
const noParse = Object.values(config.dependencies);

log('dependencies:\n', config.dependencies);
log('aliases:\n', config.aliases);

export default {
  name: config.name,
  context: config.paths.scripts,

  resolve: {
    root: config.paths.root,
    alias: config.aliases,
    modulesDirectories: ['node_modules'],
    extensions: ['', '.jsx', '.js', '.json'],
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*']
  },

  output: {
    path: config.paths.dist,
    filename: addHash('[name].js', 'chunkhash'),
    chunkFilename: addHash('chunk.[name].js', 'chunkhash'),

    publicPath: '/'
  },

  module: { noParse },

  toolbox,
  postcss,
  eslint,

  profile: config.argv.profile
}
