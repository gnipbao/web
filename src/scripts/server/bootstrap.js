import debug from 'debug';
import { start as prettyErrors } from 'pretty-error';

prettyErrors();

const levels = ['error', 'warn', 'info', 'log'];
levels.forEach(level => debug.enable(`app:server:${level}`));
