import path from 'path';
import fs from 'fs';
import { render as prettyjson } from 'prettyjson';

const ASSETS_FILE_NAME = 'webpack.assets.json';

export default () => {
  if (__DEVELOPMENT__ || __TEST__) {
    debug('assets are managed by webpack dev middleware in dev env');
    return {};
  } else {
    const assetsManifestPath = path.resolve(__dirname, ASSETS_FILE_NAME);
    debug('using assets from ', assetsManifestPath);
    const assetsContent = fs.readFileSync(assetsManifestPath);
    const assets = JSON.parse(assetsContent);
    debug('assets:\n', prettyjson(assets));

    return assets;
  }
};
