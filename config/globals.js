import mapObj from 'map-obj';
import { config } from '../package';
import { environments, environmentName } from './env';

const env = mapObj(
  environments,
  (key, val) => [`__${key.toUpperCase()}__`, val]
);

const common = {
  'process.env': {
    NODE_ENV: JSON.stringify(environmentName)
  },

  __DEVTOOLS__: environments.development && config.devTools
};

const app = {
  settings: {
    host: JSON.stringify(config.host),
    port: JSON.stringify(config.ports.app),
    apiRoot: JSON.stringify(config.apiRoot),
  }
};

export default {
  ...common,
  ...env,
  ...app
}
