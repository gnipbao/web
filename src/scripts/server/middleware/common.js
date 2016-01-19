import path from 'path';
import Express from 'express';
import morgan from 'morgan';
import favicon from 'serve-favicon';

const getLogFormat = () => {
  if (__PRODUCTION__) return 'common';
  if (__DEVELOPMENT__) return __VERBOSE__ ? 'dev' : 'tiny';

  return 'default';
};

export default [
  morgan(getLogFormat(), { immediate: true }),
  favicon(path.join(__dirname, 'public', 'favicon.ico')),
  Express.static(path.join(__dirname, 'public')),
];
