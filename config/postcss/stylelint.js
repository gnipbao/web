import path from 'path';
import resolve from '../resolve';
import config from 'stylelint-config-suitcss';

export default {
  config,
  files: resolve.root('**/*.css')
}
