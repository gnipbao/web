export default ({ dispatch, getState }) =>
  next => async action => {
    if (typeof action === 'function') return action(dispatch, getState);

    const { request, types, ...rest } = action;

    if (!request) return next(action);

    const [REQUEST, SUCCESS, FAILURE] = types;

    next({...rest, type: REQUEST});

    try {
      const result = await request();
      return next({ ...rest, result, type: SUCCESS });
    } catch (error) {
      console.error('api error (middleware)', error);
      return next({ ...rest, error, type: FAILURE });
    }
  }
