import options from './mochaOptions.js';

const { watch } = config.app.argv;
const wildcards = [
  resolve.test('app/modules/**/*.test.js')
];

const run = () => {
  let mochaError;

  return gulp.src(wildcards, { read: false })
    .pipe($.plumber())
    .pipe($.mocha(options))
    .on('error', (err) => {
      console.error('[test] error: ', err.message);
      if (err.stack) console.error('[test] stack: ', err.stack);
    })
    .on('end', () => watch ? null : process.exit(mochaError ? 1 : 0));
};

gulp.task('test:mocha', () => run() && watch && gulp.watch(wildcards, run));
