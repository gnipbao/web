'use strict';

require('babel/register');

var karmaConfig = require('./karma');

module.exports = function(config) {
  config.set(karmaConfig)
};
