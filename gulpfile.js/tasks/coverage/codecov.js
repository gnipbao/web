import codecov from 'gulp-codecov.io';

const { paths: { lcov } } = config.app;

gulp.task('coverage:codecov', (done) =>
  process.env.CI ?
    gulp.src(lcov).pipe(codecov()) :
    done()
);
