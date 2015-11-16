import fs from 'fs';

import resolve from './resolve';
import paths from './paths';
import dependencies from './dependencies';

const scripts = fs.readdirSync(paths.scripts)
  .filter((entry) => fs.statSync(resolve.src('scripts', entry)).isDirectory())
  .reduce((acc, dir) => ((acc[dir] = resolve.src('scripts', dir)) && acc), {});

export default {
  styles: resolve.src('styles'),
  templates: resolve.src('templates'),
  fonts: resolve.src('assets/fonts'),
  ...scripts,
  ...dependencies
}
