'use strict';

require('babel/register');
require('dotenv').load();

const app = require('../config');
const webpack = require(`../webpack/${app.environment}`);

global.config = { app, webpack };
global.state = { isWatching: false };

global.gulp = require('gulp');
global.sequence = require('run-sequence');
global.$ = require('gulp-load-plugins')();

require('require-dir')('./tasks', { recursive: true });
