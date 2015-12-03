import path from 'path';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';
import eslintFormatter from 'eslint-friendly-formatter';

const wildcards = {
  styles: path.join(paths.root, '**/*.css'),
  scripts: {
    app: path.join(paths.scripts, '**/*.js'),
    tests: path.join(paths.tests, '**/*.js')
  }
};

gulp.task('lint:js', () => {
  const src = config.app.argv.tests ?
    wildcards.scripts.tests :
    wildcards.scripts.app;

  return gulp.src(src)
    .pipe($.eslint())
    .pipe($.eslint.format(eslintFormatter))
    .pipe($.eslint.failAfterError());
});

gulp.task('lint:css', () => {
  const processors = [
    stylelint(config.app.postcss.stylelint),
    reporter({ clearMessages: true })
  ];

  return gulp.src(wildcards.styles)
    .pipe($.postcss(processors));
});

gulp.task('lint', () => sequence(['lint:js', 'lint:css']));
