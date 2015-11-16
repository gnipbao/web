import paths from '../../config/paths';

export default [
  {
    test: /\.jsx?$/,
    include: [paths.scripts],
    loader: 'eslint'
  }
]
