import monitor from '../utils/monitor';

const { watch } = config.app.argv;

gulp.task('server', () => monitor('server', resolve.dist('server.js'), {
  watch,
  killTree: true,
  args: [
    '--optimize_for_size',
    '--max_old_space_size=460',
    '--gc_interval=100'
  ]
}));
