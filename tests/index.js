// es6 promise polyfill is only required
// when using karma-phantomjs-launcher
require('es6-promise').polyfill();
require('isomorphic-fetch');

// see https://github.com/webpack/karma-webpack#alternative-usage

// require all files in ~/src/scripts,
// excluding client.js(x) & server/*.js(x)
const src = require.context('../src/scripts', true, /^((?!(client|server)).)*\.jsx?/);
src.keys().forEach(src);

const tests = require.context('.', true, /.+\.test\.jsx?$/);
tests.keys().forEach(tests);
