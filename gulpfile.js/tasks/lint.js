'use strict';

import path from 'path';
import eslintFormatter from 'eslint-friendly-formatter';

const { scripts, tests } = config.app.paths;

const wildcards = {
  scripts: path.join(scripts, '**/*.js'),
  tests: path.join(tests, '**/*.js')
};

gulp.task('lint', () => {
  const src = config.app.argv.tests ?
    wildcards.tests : wildcards.scripts;

  return gulp.src(src)
    .pipe($.eslint())
    .pipe($.eslint.format(eslintFormatter))
    .pipe($.eslint.failAfterError());
});
