import { paths } from '../../config';
import devMiddleware from './devMiddleware';

export default {
  contentBase: paths.src,
  publicPath: '/',
  hot: true,
  historyApiFallback: true,

  ...devMiddleware
}
