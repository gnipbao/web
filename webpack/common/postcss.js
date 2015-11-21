import {
  cssnext,
  assets,
  fontMagician,
  stylelint
} from '../../config/postcss';

export default () => [
  require('stylelint')(stylelint),
  require('precss'),
  require('postcss-cssnext')(cssnext),
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
  require('cssnano'),
  require('postcss-reporter'),
  require('postcss-browser-reporter')({
    selector: 'body:after'
  })
];
