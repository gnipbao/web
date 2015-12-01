'use strict';

require('babel/register');

const app = require('../config');
const client = require(`../webpack/${app.environment}/client`);
const server = require(`../webpack/${app.environment}/server`);
const devMiddleware = require('../webpack/development/devMiddleware');

global.config = {
  app,
  webpack: {
    client,
    server,
    devMiddleware
  }
};

global.state = {
  isWatching: false
};

global.gulp = require('gulp');
global.sequence = require('run-sequence');
global.$ = require('gulp-load-plugins')();

require('require-dir')('./tasks', { recursive: true });
