import ExtractTextPlugin from 'extract-text-webpack-plugin';

import paths from '../../../config/paths';
import common from './common';

const extractOptions = {
  allChunks: true
};

const cssOptions = {
  css: 'minimize&importLoaders=1',
  sass: 'minimize&modules&localIdentName=[path][name]---[local]---[hash:base64:5]'
};

export default [
  ...common,
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(`css?${cssOptions.css}!postcss`, extractOptions)
  },
  {
    test: /\.scss$/,
    exclude: /node_modules\/react-toolbox\/lib/,
    loader: ExtractTextPlugin.extract(`css?${cssOptions.sass}!sass?includePath[]=${paths.modules}`, extractOptions)
  },
  {
    test: /\.scss$/,
    include: /node_modules\/react-toolbox\/lib/,
    loader: ExtractTextPlugin.extract(`css?${cssOptions.sass}!sass?includePath[]=${paths.modules}!toolbox`, extractOptions)
  },
  {
    test: /\.sass$/,
    loader: ExtractTextPlugin.extract(`css?${cssOptions.sass}!sass?includePath[]=${paths.modules}&indentedSyntax`, extractOptions)
  }
]
