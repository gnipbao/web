import path from 'path';
import Express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import compression from 'compression';
import responseTime from 'response-time';

import {
  getLogFormat,
  compressionFilter
} from './utils';

const logFormat = getLogFormat();

export default [
  morgan(logFormat),
  compression({ filter: compressionFilter, level: 3 }),
  favicon(path.join(__dirname, 'public', 'favicon.ico')),
  Express.static(path.join(__dirname, 'public')),
  responseTime(),
  helmet.hidePoweredBy({ setTo: 'human brains' }),
  helmet.frameguard('sameorigin'),
  helmet.xssFilter(),
  helmet.noSniff(),
  helmet.ieNoOpen()
]
