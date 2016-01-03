require('babel-polyfill');
require('isomorphic-fetch');

// see https://github.com/webpack/karma-webpack#alternative-usage

// require all files in ~/src/scripts,
// excluding client.js(x) & server/*.js(x)
const src = require.context('../src/scripts', true, /^((?!(client|server)).)*\.jsx?/);
src.keys().forEach(src);

const frameworkTests = require.context('./framework', true, /.+\.test\.jsx?$/);
frameworkTests.keys().forEach(frameworkTests);

const appTests = require.context('./app', true, /.+\.test\.jsx?$/);
appTests.keys().forEach(appTests);
