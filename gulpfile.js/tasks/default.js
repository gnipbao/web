'use strict';

gulp.task('default', () => sequence(['assets', 'server', 'watch']));
