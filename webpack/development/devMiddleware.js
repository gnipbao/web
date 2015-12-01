import { argv } from '../../config';

export default {
  publicPath: '/',
  headers: { 'Access-Control-Allow-Origin': '*' },
  watchOptions: { aggregateTimeout: 0 },
  stats: {
    children: false,
    colors: true,
    reasons: true,
    profile: argv.profile
  },

  // --verbose
  //
  // if not in verbose mode display no info to console
  // (only warnings and errors)
  noInfo: !argv.verbose,

  // --quiet
  //
  // set this to true and you'll see no error output in the console
  // and it will make much harder to know whats wrong
  quiet: argv.quiet
}

// for other settings see
// http://webpack.github.io/docs/webpack-dev-middleware.html
