import mapObj from 'map-obj';
import config from '../../config';

const env = mapObj(config.env, (key, val) => [`__${key.toUpperCase()}__`, val]);

const API_ROOT = 'http://localhost:8080';
const DEVTOOLS = false;

const common = {
  'process.env': {
    NODE_ENV: JSON.stringify(config.environment)
  },

  __CLIENT__: true,
  __SERVER__: false,

  __DEVTOOLS__: config.env.development && DEVTOOLS
};

const app = {
  settings: {
    apiRoot: JSON.stringify(API_ROOT),
  }
};

export default {
  ...common,
  ...env,
  ...app
}
