import paths from '../../../config/paths';
import common from './common';

export default [
  ...common,
  {
    test: /\.jsx?$/,
    loader: 'babel',
    include: [
      /node_modules\/qs/,
      paths.scripts
    ]
  }
]
