export default ({ watch }) => ({
  enabled: !watch,
  reporters: [
    { type: 'lcov' },
    { type: 'text-summary' },
    { type: 'text' },
    { type: 'html', dir: 'coverage' }
  ]
});
