gulp.task('default', () => sequence(['assets', 'server', 'watch', 'sync']));
