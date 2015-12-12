export default store => next => action => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }

  const timeoutId = setTimeout(
    () => next(action),
    action.meta.delay
  );

  return () => clearTimeout(timeoutId);
};
