import paths from '../../../config/paths';
import { cssOptions } from '../../utils';

export default [
  {
    test: /\.css$/,
    include: [paths.modules, paths.styles, paths.scripts],
    loaders: ['style', `css?${cssOptions.css}`, 'postcss']
  },
  {
    test: /\.scss$/,
    exclude: /node_modules\/react-toolbox\/lib/,
    loaders: ['style', `css?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}`],
  },
  {
    test: /\.scss$/,
    include: /node_modules\/react-toolbox\/lib/,
    loaders: ['style', `css?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}`, 'toolbox'],
  },
  {
    test: /\.sass$/,
    loaders: ['style', `css?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}&indentedSyntax`],
  },
  {
    test: /\.jsx?$/,
    loader: 'babel',
    include: [
      /node_modules\/qs/,
      paths.scripts
    ],
    query: {
      stage: 0,
      plugins: ['react-transform'],
      extra: {
        'react-transform': {
          transforms: [
            {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            },
            {
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }
          ]
        }
      }
    }
  }
]
