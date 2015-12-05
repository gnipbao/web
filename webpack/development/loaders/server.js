import paths from '../../../config/paths';

export default [
  {
    test: /\.jsx?$/,
    loader: 'babel',
    include: [
      /node_modules\/qs/,
      paths.scripts
    ]
  }
]
