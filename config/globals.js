import minimist from 'minimist';
import mapObj from 'map-obj';

import {
  name as appName,
  description as appDescription,
  config
} from '../package';

import server from './server';
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
  __DEBUG__: argv.debug,

  __DEVTOOLS__: environments.development && config.devTools,
};

const webRoot = config.webRoot || server.url;

const app = {
  settings: {
    name: JSON.stringify(appName),
    description: JSON.stringify(appDescription),
    locale: JSON.stringify(config.locale),

    host: JSON.stringify(server.host),
    port: JSON.stringify(server.port),

    webRoot: JSON.stringify(webRoot),
    apiRoot: JSON.stringify(config.apiRoot),
  }
};

export default {
  ...common,
  ...env,
  ...app,
}
