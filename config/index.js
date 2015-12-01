import minimist from 'minimist';

import { name, description, config } from '../package';
import server from './server';
import paths from './paths';
import resolve from './resolve';
import aliases from './aliases';
import dependencies from './dependencies';
import globals from './globals';
import browsersync from './browsersync';
import postcss from './postcss';
import { environments, environmentName } from './env';

const argv = minimist(process.argv.slice(2));

export default {
  argv, 

  name,
  description,
  server,

  paths,
  resolve,
  aliases,
  dependencies,
  globals,

  postcss,
  browsersync,

  env: environments,
  environment: environmentName,

  ...config
}
