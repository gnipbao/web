import cssnextConfig  from '../../config/cssnext';

export default () => [
  require('precss'),
  require('postcss-cssnext')(cssnextConfig),
  require('postcss-nested'),
  require('postcss-size'),
  require('postcss-focus'),
  require('postcss-position'),
  require('postcss-easings'),
  require('postcss-hexrgba'),
  require('postcss-color-rgba-fallback'),
  require('postcss-input-style'),
  require('postcss-quantity-queries'),
  require('postcss-responsive-type'),
  require('postcss-reporter'),
  require('postcss-browser-reporter')
];
