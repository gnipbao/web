import util from 'util';
import { config } from '../package';

const scheme = config.https ? 'https' : 'http';
const host = process.env.HOST || config.host;
const port = process.env.PORT || config.ports.app;

export default {
  host,
  port,
  url: util.format('%s://%s:%d', scheme, host, port)
}
