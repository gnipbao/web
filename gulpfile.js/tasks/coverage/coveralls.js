const { paths: { lcov } } = config.app;

gulp.task('coverage:coveralls', (done) =>
  process.env.CI ?
    gulp.src(lcov).pipe($.coveralls()) :
    done()
);
