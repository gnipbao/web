import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

export default {
  enabled: !argv.watch,
  reporters: [
    { type: 'lcov' },
    { type: 'text-summary' },
    { type: 'text' },
    { type: 'html', dir: 'coverage' }
  ]
}
