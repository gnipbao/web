import paths from '../../config/paths';

const cssOptions = {
  css: 'importLoaders=1',
  sass: 'modules'
};

export default [
  {
    test: /\.jsx?$/,
    include: [
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
    loaders: ['style', `css?${cssOptions.sass}`, 'sass?includePath[]=' + paths.modules],
  },
  {
    test: /\.sass$/,
    loaders: ['style', `css?${cssOptions.sass}`, 'sass?includePath[]=' + paths.modules + '&indentedSyntax'],
  }
]
