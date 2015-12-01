import paths from '../../../config/paths';

const cssOptions = {
  css: 'importLoaders=1&modules',
  sass: 'modules'
};

export default [
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
