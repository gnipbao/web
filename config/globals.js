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

    __DEVTOOLS__: environments.development && true,
  };

  const webRoot = process.env.WEB_ROOT || server.url;

  const app = {
    settings: {
      name: JSON.stringify(appName),
      description: JSON.stringify(appDescription),
      locale: JSON.stringify(process.env.LOCALE || config.locale),

      host: JSON.stringify(server.host),
      port: server.port,

      webRoot: JSON.stringify(webRoot),
      authRoot: JSON.stringify(process.env.AUTH_ROOT),
      apiRoot: JSON.stringify(process.env.API_ROOT),

      session: { ttl: 24 * 60 * 60 * 1000 }
    }
  };

  return {
    ...common,
    ...env,
    ...app,
  };
};
