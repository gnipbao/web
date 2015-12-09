const { resolve, argv: { watch } } = config.app;
const wildcards = [
  resolve.test('app/modules/**/*.test.js')
];

// see:
// http://mochajs.org/#usage
// https://github.com/sindresorhus/gulp-mocha

const run = () =>
  gulp.src(wildcards)
    .pipe($.mocha({
      ui: 'bdd',
      slow: 200,
      recursive: true,
      watch,
      require: [
        resolve.test('setup/mocha.js'),
      ],
      reporter: 'dot',
      growl: true,
      // grep: 'your suit or test case title pattern',
    }));

gulp.task('test:mocha', () => run() && watch && gulp.watch(wildcards, run));
