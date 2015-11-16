import mapObj from 'map-obj';
import resolve from './resolve';

const rootSiblings = mapObj(resolve, (k, v) => [k, v('')]);

export default {
  ...rootSiblings,

  scripts: resolve.src('scripts'),
  styles: resolve.src('styles'),
  templates: resolve.src('templates'),

  assets: {
    root: resolve.src('assets'),
    fonts: resolve.src('assets/fonts'),
    icons: resolve.src('assets/icons')
  },

  eslintrc: resolve.root('.eslintrc'),
  karmaConfig: resolve.root('karma.conf.js')
}
