import path from 'path';
import { argv, paths } from '../config';
import resolve from '../config/resolve';

import webpack from '../webpack/test/client';
import webpackMiddleware from '../webpack/development/devMiddleware';

import plugins from './plugins';
import frameworks from './frameworks';
import coverage from './coverage';
import customLaunchers from './launchers';

const testsPath = resolve.test('index.js');

const karmaConfig = {
  files: [
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    testsPath
  ],
  frameworks,
  preprocessors: {
    [testsPath]: ['webpack', 'sourcemap']
  },
  reporters: ['dots'],
  browsers: ['Chrome'],
  customLaunchers,
  webpack,
  webpackMiddleware,
  plugins,
  singleRun: !argv.watch,
  autoWatch: true,
  autoWatchBatchDelay: 0,
  reportSlowerThan: 40,
  concurrency: 2,
  browserNoActivityTimeout: 30000,
};

if (coverage.enabled) {
  const srcWildcard = resolve.src('**/*.js');

  karmaConfig.preprocessors[srcWildcard] = ['coverage'];
  karmaConfig.reporters.push('coverage');
  karmaConfig.coverageReporter = { reporters: coverage.reporters };

  karmaConfig.webpack.module.preLoaders = [
    { test: /\.jsx?$/, include: paths.scripts, loader: 'isparta' }
  ];
}

export default karmaConfig;
