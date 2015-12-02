'use strict';

require('babel/register');

const app = require('../config');
const client = require(`../webpack/${app.environment}/client`);
const server = require(`../webpack/${app.environment}/server`);
const devMiddleware = require('../webpack/development/devMiddleware');

global.resolve = app.resolve;
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

global.dude = require('debug-dude');
global.prettyjson = require('prettyjson').render;

require('require-dir')('./tasks', { recursive: true });
