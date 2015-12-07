import path from 'path';

gulp.task('security:check', (cb) => {
  $.nsp({
    package: path.resolve(__dirname, '../../package.json'),
    stopOnError: false
  }, cb);
});
