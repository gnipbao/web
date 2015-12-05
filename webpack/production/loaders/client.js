import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { localIdentName } from '../../utils';
import paths from '../../../config/paths';

const extractOptions = {
  allChunks: true
};

const cssOptions = {
  css: `minimize&importLoaders=2&localIdentName=${localIdentName}`,
  sass: `minimize&modules&localIdentName=${localIdentName}`
};

export default [
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
  },
  {
    test: /\.jsx?$/,
    include: [
      /node_modules\/qs/,
      paths.scripts
    ],
    loader: 'babel'
  }
]
