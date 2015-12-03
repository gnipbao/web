'use strict';

require('./logging.js');
require('./globals.js');
require('require-dir')('../tasks', { recursive: true });
