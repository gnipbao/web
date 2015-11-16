import paths from '../../config/paths';

const cssOptions = {
  css: 'importLoaders=1&modules',
  sass: 'modules'
};

export default [
  {
    test: /\.jsx?$/,
    loader: 'babel',
    include: [paths.scripts],
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
  },
  {
    test: /\.css$/,
    loaders: ['style', `css?${cssOptions.css}`, 'postcss']
  },
  {
    test: /\.scss$/,
    loaders: ['style', `css?${cssOptions.sass}`, 'sass?includePath[]=' + paths.modules],
  },
  {
    test: /\.sass$/,
    loaders: ['style', `css?${cssOptions.sass}`, 'sass?includePath[]=' + paths.modules + '&indentedSyntax'],
  }
]
