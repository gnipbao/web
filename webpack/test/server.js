import merge from 'webpack-merge';

import base from '../base/server';
import common from './common';

export default merge(base, common, {
});
