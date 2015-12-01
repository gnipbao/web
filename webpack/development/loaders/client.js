import paths from '../../../config/paths';
import common from './common';

export default {
  ...common,
  {
    test: /\.jsx?$/,
    loader: 'babel',
    include: [
      /node_modules\/qs/,
      paths.scripts
    ],
    query: {
      stage: 0,
      plugins: ['react-transform'],
      extra: {
        'react-transform': {
          transforms: [
            {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            },
            {
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }
          ]
        }
      }
    }
  },
};
