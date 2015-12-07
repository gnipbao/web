import logger from 'debug-dude';
import { render as prettyjson } from 'prettyjson';

import config from '../../config';
import toolbox from './toolbox';
import postcss from './postcss';
import eslint from './eslint';

const { debug } = logger('app:webpack');

debug('dependencies:\n', prettyjson(config.dependencies));
debug('aliases:\n', prettyjson(config.aliases));
debug('globals:\n', prettyjson(config.globals));

const noParse = [
];

export default {
  name: config.name,
  context: config.paths.scripts,

  resolve: {
    root: config.paths.root,
    alias: config.aliases,
    modulesDirectories: ['node_modules'],
    extensions: [
      '',
      '.jsx',
      '.js',
      '.css',
      '.scss',
      '.json'
    ],
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*']
  },

  output: {
    publicPath: '/'
  },

  module: { noParse },

  toolbox,
  postcss,
  eslint,

  profile: config.argv.profile
}
