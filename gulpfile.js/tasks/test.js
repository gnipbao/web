const { resolve, argv: { watch } } = config.app;
const wildcards = [
  resolve.test('app/modules/**/*.test.js')
];

// see:
// http://mochajs.org/#usage
// https://github.com/sindresorhus/gulp-mocha

const options = {
  // grep: 'your suit or test case title pattern',

  ui: 'bdd',
  slow: 200,
  recursive: true,
  watch,
  require: [
    resolve.test('setup/mocha.js'),
  ],
  reporter: 'dot',
  growl: true,
};


const run = () => {
  let mochaError;

  return gulp.src(wildcards, { read: false })
    .pipe($.plumber())
    .pipe($.mocha(options))
    .on('error', (err) => {
      console.error('[test] error: ', error.message);
      console.error('[test] stack: ', error.stack);
      mochaError = err;
    })
    .on('end', () => {
      if (mochaError) {
        console.error(mochaError.message);
        process.exit(1);
      }

      process.exit(0);
    });
};

gulp.task('test:mocha', () => run() && watch && gulp.watch(wildcards, run));
