import { postcss, argv } from '../../config';

const {
  cssnext,
  assets,
  fontMagician,
  stylelint
} = postcss;

const linters = () => [
  require('stylelint')(stylelint)
];

const reporters = () => [
  require('postcss-reporter'),
  require('postcss-browser-reporter')
];

export default () => [
  ...(argv.lint ? linters() : []),

  require('precss'),
  require('postcss-cssnext')(cssnext),
  require('lost'),
  require('postcss-assets')(assets),
  require('postcss-font-magician')(fontMagician),
  require('postcss-size'),
  require('postcss-focus'),
  require('postcss-position'),
  require('postcss-easings'),
  require('postcss-hexrgba'),
  require('postcss-color-rgba-fallback'),
  require('postcss-input-style'),
  require('postcss-quantity-queries'),
  require('postcss-responsive-type'),

  ...(argv.production ? require('cssnano') : []),
  ...(argv.lint ? reporters() : [])
];
