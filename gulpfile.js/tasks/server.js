import monitor from '../utils/monitor';

gulp.task('server', () => monitor('server', resolve.dist('server.js')));
