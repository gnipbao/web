'use strict';

require('dotenv').load();
require('babel/register');

const appConfig = require('../config');
const webpackConfig = require(`../webpack/${appConfig.environment}`);

global.config = {
  app: appConfig,
  webpack: webpackConfig
};

global.state = {
  isWatching: false
};

global.gulp = require('gulp');
global.sequence = require('run-sequence');
global.$ = require('gulp-load-plugins')();

require('require-dir')('./tasks', { recursive: true });
