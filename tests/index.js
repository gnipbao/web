// see https://github.com/webpack/karma-webpack#alternative-usage

const tests = require.context('.', true, /.+\.test\.jsx?$/);
tests.keys().forEach(tests);

// require all files in ~/src/scripts, excluding index.js
// const src = require.context('../src/scripts', true, /^((?!client).)*\.jsx?/);
// src.keys().forEach(src);
