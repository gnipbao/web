export const API = Symbol('API');

export default function({ dispatch, getState }) {
  return function(next) {
    return async function(action) {
      if (!action.payload || !action.payload.request) {
        return next(action);
      }

      let {
        payload: {
          request,
          ...args
        },
        ...rest
      } = action;

      next({ payload: { ...args }, ...rest });

      try {
        const data = await request(args, getState());
        return next({ ...rest, payload: { data, ...args } });
      } catch (error) {
        console.error('api error (middleware)', error);
        return next({ ...rest, payload: { error, ...args } });
      }
    };
  };
}
