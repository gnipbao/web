import { paths } from '../../../config';
import common from './common';

export default [
  ...common,
  {
    test: /\.hbs?$/,
    include: paths.templates,
    loader: 'handlebars'
  }
]
