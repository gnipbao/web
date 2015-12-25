import { paths, postcss, argv } from '../../config';

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

export default (bundler) => [
  ...(argv.lint ? linters() : []),

  require('postcss-import')({
    addDependencyTo: bundler,
    path: [paths.styles]
  }),
  require('postcss-custom-media')({
    extensions: {
      '--small': '(width >= 360px) and (height >= 480px)',
      '--medium': '(width >= 768px) and (height >= 680px)',
      '--large': '(width >= 1024px)'
    },
    preserve: true,
    appendExtensions: true
  }),
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
  require('postcss-brand-colors'),

  ...(argv.production ? require('cssnano') : []),
  ...(argv.lint ? reporters() : [])
];
