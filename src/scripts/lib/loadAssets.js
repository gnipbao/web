import path from 'path';
import fs from 'fs';
import { render as prettyjson } from 'prettyjson';
import logger from 'debug-dude';

const { debug, error } = logger('app:server');
const ASSETS_FILE_NAME = 'webpack.assets.json';

export default () => {
  if (__DEVELOPMENT__) {
    const timestamp = Date.now();
    const developmentBundle = `/main.js?${timestamp}`;

    debug('assets are managed by webpack dev middleware in dev environment');
    debug(`serving javascript bundle as ${developmentBundle}`);

    return { scripts: [developmentBundle], styles: [] };
  } else {
    const assetsManifestPath = path.resolve(__dirname, ASSETS_FILE_NAME);
    debug('using assets from ', assetsManifestPath);
    const assetsContent = fs.readFileSync(assetsManifestPath);
    const assets = JSON.parse(assetsContent);
    debug('assets:\n', prettyjson(assets));

    return assets;
  }
};
