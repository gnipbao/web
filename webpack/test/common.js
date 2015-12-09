import loaders from './loaders';
import plugins from './plugins';
import externals from './externals';

const noParse = [
  /node_modules\/sinon\//
];

export default {
  module: { loaders, noParse },
  plugins,
  externals,
  devtool: 'inline-source-map',
  debug: true,
  cache: true,
}
