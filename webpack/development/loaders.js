import paths from '../../config/paths';

const cssOptions = {
  css: 'importLoaders=1&modules',
  sass: 'modules'
};

const babelOptions = {
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
};

export default [
  {
    test: /\.jsx?$/,
    loaders: [
      'babel?' + JSON.stringify(babelOptions),
      'flowcheck',
      'babel?blacklist=flow'
    ],
    include: [paths.scripts]
  },
  {
    test: /\.css$/,
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
    loaders: ['style', `css?${cssOptions.sass}`, 'sass?includePath[]=' + paths.modules + '&indentedSyntax'],
  }
]
