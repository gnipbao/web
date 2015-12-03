import path from 'path';

const { verbose, profile } = config.app.argv;
const wildcard = path.join(paths.assets.root, '**/*');

gulp.task('assets', () => {
  return gulp.src(wildcard)
    .pipe($.changed(paths.dist))
    .pipe(profile ? $.debug({ title: 'assets' }) : $.util.noop())
    .pipe(verbose || profile ? $.size({ title: 'assets' }) : $.util.noop())
    .pipe(gulp.dest(paths.dist));
});
