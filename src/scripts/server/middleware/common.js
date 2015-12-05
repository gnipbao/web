import path from 'path';
import Express from 'express';
import morgan from 'morgan';
import favicon from 'serve-favicon';

const getLogFormat = () => {
  if (__PRODUCTION__) return 'tiny';
  if (__VERBOSE__ || __DEVELOPMENT__) return 'short';

  return 'dev';
};

export default [
  morgan(getLogFormat()),
  favicon(path.join(__dirname, 'public', 'favicon.ico')),
  Express.static(path.join(__dirname, 'public')),
]
