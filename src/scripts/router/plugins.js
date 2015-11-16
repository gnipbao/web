import { Router5 } from 'router5';
import historyPlugin from 'router5-history';

const plugins = [historyPlugin()];

if (__DEVELOPMENT__ || __TEST__) {
  plugins.push(Router5.loggerPlugin());
}

export default plugins;
