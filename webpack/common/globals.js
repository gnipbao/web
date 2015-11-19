import mapObj from 'map-obj';
import config from '../../config';

const env = mapObj(config.env, (key, val) => [`__${key.toUpperCase()}__`, val]);

const common = {
  'process.env': {
    NODE_ENV: JSON.stringify(config.environment)
  },

  __CLIENT__: true,
  __SERVER__: false,

  __DEVTOOLS__: config.env.development && process.env.DEVTOOLS,
  __DEVTOOLS_DOCKABLE__: process.env.DEVTOOLS_DOCKABLE,
};

const app = {
  settings: {
    apiRoot: JSON.stringify(process.env.API_ROOT),
  }
};

export default {
  ...common,
  ...env,
  ...app
}
