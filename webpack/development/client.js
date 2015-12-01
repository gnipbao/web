import merge from 'webpack-merge';

import appConfig from '../../config';

import base from '../base/client';
import common from './common';

import plugins from './plugins/client';
import loaders from './loaders/client';

import preLoaders from './preLoaders';
import devMiddleware from './devMiddleware';

export default merge(base, common, {
  entry: ['webpack-hot-middleware/client'],
  module: { preLoaders, loaders },
  plugins,
  ...devMiddleware
});
