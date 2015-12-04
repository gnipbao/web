import path from 'path';
import Express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import compression from 'compression';
import responseTime from 'response-time';

import {
  getLogFormat,
  filterCompression
} from './utils';

const logFormat = getLogFormat();

export default [
  favicon(path.join(__dirname, 'public', 'favicon.ico')),
  morgan(logFormat),
  Express.static(path.join(__dirname, 'public')),
  compression({ filter: filterCompression, level: 3 }),
  responseTime(),
  helmet.hidePoweredBy({ setTo: 'human brains' }),
  helmet.frameguard('sameorigin'),
  helmet.xssFilter(),
  helmet.noSniff(),
  helmet.ieNoOpen()
]
