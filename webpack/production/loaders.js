import ExtractTextPlugin from 'extract-text-webpack-plugin';
import paths from '../../config/paths';

const extractOptions = {
  allChunks: true
};

const cssOptions = {
  css: 'minimize&importLoaders=1',
  sass: 'minimize&modules&localIdentName=[path][name]---[local]---[hash:base64:5]'
};

export default [
  {
    test: /\.jsx?$/,
    include: [paths.scripts],
    loader: 'babel'
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(`css?${cssOptions.css}!postcss`, extractOptions)
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(`css?${cssOptions.sass}!sass?includePath[]=${paths.modules}`, extractOptions)
  },
  {
    test: /\.sass$/,
    loader: ExtractTextPlugin.extract(`css?${cssOptions.sass}!sass?includePath[]=${paths.modules}&indentedSyntax`, extractOptions)
  }
]
