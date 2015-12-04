import minimist from 'minimist';
import mapObj from 'map-obj';

import { config } from '../package';
import { environments, environmentName } from './env';

const argv = minimist(process.argv.slice(2));
const env = mapObj(
  environments,
  (key, val) => [`__${key.toUpperCase()}__`, val]
);

const common = {
  'process.env': {
    NODE_ENV: JSON.stringify(environmentName),
  },

  __QUIET__: argv.quiet,
  __VERBOSE__: argv.verbose,
  __PROFILE__: argv.profile,

  __DEVTOOLS__: environments.development && config.devTools,
};

const app = {
  settings: {
    name: JSON.stringify(config.name),
    description: JSON.stringify(config.description),
    host: JSON.stringify(config.host),
    port: JSON.stringify(config.ports.app),
    apiRoot: JSON.stringify(config.apiRoot),
  }
};

export default {
  ...common,
  ...env,
  ...app,
}
