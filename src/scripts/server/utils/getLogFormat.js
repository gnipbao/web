export default () => {
  if (__PRODUCTION__) return 'tiny';
  if (__VERBOSE__ || __DEVELOPMENT__) return 'short';

  return 'dev';
};


