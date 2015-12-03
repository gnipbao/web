import logger from 'debug-dude';
import R from 'ramda';

import aliases from '../../config/aliases';

const { debug } = logger('app:webpack');
export const modules = R.keys(aliases);

export default (_ctx, req) => {
  const isExternal = !modules.some(m => req.startsWith(m));
  const isModule = Boolean(req.match(/^[a-z\.\-0-9_]*$/i));

  debug(`${req}: external=${isExternal}, module=${isModule}`);

  return isExternal && isModule;
};
