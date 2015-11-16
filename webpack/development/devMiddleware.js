import { argv } from '../../config';

export default {
  headers: { 'Access-Control-Allow-Origin': '*' },
  watchOptions: { aggregateTimeout: 0 },
  stats: {
    children: false,
    colors: true,
    reasons: true,
    profile: argv.profile
  },
  noInfo: !argv.verbose,

  // --quiet
  //
  // set this to true and you'll see no error output in the console
  // and it will make much harder to now whats wrong
  quiet: argv.quiet
}
