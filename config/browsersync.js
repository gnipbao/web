import { name, config } from '../package';
import server from './server';

export default {
  logPrefix: name,
  logLevel: 'debug',
  logConnections: true,
  notify: true,

  // Run as an https by setting 'https: true'
  // Note: this uses an unsigned certificate which on first access
  //       will present a certificate warning in the browser

  https: config.https,

  proxy: server.host + ':' + server.port,
  ghostMode: {
    clicks: true,
    forms: true,
    scroll: true
  },
  browser: 'google chrome',
  startPath: '/',
  reloadOnRestart: true,
  reloadDebounce: 100,
  injectChanges: true,
  port: config.ports.browserSync,
  ui: { port: config.ports.browserSyncUI },
  open: process.env.OPEN_IN_BROWSER || false
}
