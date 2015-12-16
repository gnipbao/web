import mapObj from 'map-obj';

import {
  name as appName,
  description as appDescription,
  config
} from '../package';

import server from './server';

export default (environments, environmentName, argv) => {
  const env = mapObj(
    environments,
    (key, val) => [`__${key.toUpperCase()}__`, val]
  );

  const common = {
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

  return {
    ...common,
    ...env,
    ...app,
  };
};
