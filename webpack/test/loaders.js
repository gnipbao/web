import paths from '../../config/paths';
import { cssOptions } from '../utils';

export default [
  {
    test: /\.jsx?$/,
    include: [
      /node_modules\/qs/,
      paths.scripts,
      paths.tests
    ],
    loader: 'babel'
  },
  {
    test: /\.css$/,
    loaders: ['style', `css?${cssOptions.css}`, 'postcss']
  },
  {
    test: /\.scss$/,
    loaders: ['style', `css?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}`],
  },
  {
    test: /\.sass$/,
    loaders: ['style', `css?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}&indentedSyntax`],
  }
]
