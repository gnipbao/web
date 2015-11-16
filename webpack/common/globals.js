import mapObj from 'map-obj';
import config from '../../config';

const envGlobals = mapObj(config.env, (key, val) => [`__${key.toUpperCase()}__`, val]);

const commonGlobals = {
  'process.env': {
    NODE_ENV: JSON.stringify(config.environment)
  },

  __CLIENT__: true,
  __SERVER__: false,

  __DEVTOOLS__: config.env.development && config.devTools,
  __DEVTOOLS_DOCKABLE__: config.devToolsDockable,
};

const appGlobals = {
  settings: {
    apiRoot: JSON.stringify(config.apiRoot),
  }
};

export default {
  ...commonGlobals,
  ...envGlobals,
  ...appGlobals
}
