'use strict';

require('babel-core/register');

var karmaConfig = require('./karma');

module.exports = function(config) {
  config.set(karmaConfig)
};
