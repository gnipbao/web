import path from 'path';
import resolve from '../resolve';
import config from 'stylelint-config-suitcss';

const files = [
  resolve.src('**/*.css'),
  '!node_modules/normalize.css/normalize.css'
];

export default {
  config,
  files
}
