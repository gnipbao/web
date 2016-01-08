'use strict';

require('dotenv').load();

require('./globals.js');
require('require-dir')('../tasks', { recurse: true });
