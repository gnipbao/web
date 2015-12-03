import paths from '../../../config/paths';
import common from './common';

const cssOptions = {
  css: 'importLoaders=1&modules',
  sass: 'modules'
};

// for more info about css loading see:
// https://github.com/webpack/css-loader#local-scope

export default [
  ...common,
  {
    test: /\.hbs?$/,
    include: [paths.templates],
    loader: 'handlebars'
  },
  {
    test: /\.css$/,
    loaders: [`css/locals?${cssOptions.css}`, 'postcss']
  },
  {
    test: /\.scss$/,
    exclude: /node_modules\/react-toolbox\/lib/,
    loaders: [`css/locals?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}`],
  },
  {
    test: /\.scss$/,
    include: /node_modules\/react-toolbox\/lib/,
    loaders: [`css/locals?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}`, 'toolbox'],
  },
  {
    test: /\.sass$/,
    loaders: [`css/locals?${cssOptions.sass}`, 'sass?includePath[]=' + paths.modules + '&indentedSyntax'],
  }
]
