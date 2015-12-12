// this a duplication of mocha.opts file
// becasue mocha node API that
// doesn't respect mocha.opts

// see:
// http://mochajs.org/#usage
// https://github.com/sindresorhus/gulp-mocha

export default {
  // grep: 'your suit or test case title pattern',

  ui: 'bdd',
  slow: 200,
  recursive: true,
  require: [
    resolve.test('setup/mocha.js'),
  ],
  reporter: 'dot',
  growl: true,
}
