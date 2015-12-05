import paths from '../../../config/paths';

export default [
  {
    test: /\.jsx?$/,
    include: [
      /node_modules\/qs/,
      paths.scripts
    ],
    loader: 'babel'
  }
]
