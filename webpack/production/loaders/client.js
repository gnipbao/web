import ExtractTextPlugin from 'extract-text-webpack-plugin';

import paths from '../../../config/paths';
import { cssOptions } from '../../utils';

const extractOptions = {
  allChunks: true
};

export default [
  {
    test: /\.css$/,
    include: [paths.modules, paths.styles, paths.scripts],
    loader: ExtractTextPlugin.extract(`css?minimize&${cssOptions.css}!postcss`, extractOptions)
  },
  {
    test: /\.scss$/,
    exclude: /node_modules\/react-toolbox\/lib/,
    loader: ExtractTextPlugin.extract(`css?minimize&${cssOptions.sass}!sass?includePath[]=${paths.modules}`, extractOptions)
  },
  {
    test: /\.scss$/,
    include: /node_modules\/react-toolbox\/lib/,
    loader: ExtractTextPlugin.extract(`css?minimize&${cssOptions.sass}!sass?includePath[]=${paths.modules}!toolbox`, extractOptions)
  },
  {
    test: /\.sass$/,
    loader: ExtractTextPlugin.extract(`css?minimize&${cssOptions.sass}!sass?includePath[]=${paths.modules}&indentedSyntax`, extractOptions)
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
