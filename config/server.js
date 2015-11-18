import { config } from '../package';

const scheme = config.https ? 'https' : 'http';

const host = process.env.HOST || config.host;
const port = process.env.PORT || config.ports.app;

const publicHost = process.env.PUBLIC_HOST || host;
const publicPort = process.env.PUBLIC_PORT || port;

export default {
  host,
  port,

  publicHost,
  publicPort,

  url: `${scheme}://${host}:${port}`,
  publicUrl: `${scheme}://${publicHost}:${publicPort}`
}
