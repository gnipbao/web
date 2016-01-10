import { camelizeKeys } from 'humps';
import { normalize } from 'normalizr';

export const API = Symbol('API');

const transform = (json, schema) => {
  const camelized = camelizeKeys(json);
  return normalize(camelized, schema);
};

export default ({ dispatch, getState }) => next => async (action) => {
  if (!action.meta || !action.meta[API]) return next(action);

  let { request, schema } = action.meta[API];
  let { payload, ...rest } = action;

  next({ payload, ...rest });

  try {
    const json = await request(payload, getState());
    const data = transform(json, schema);

    return next({ ...rest, payload: { data, ...payload } });
  } catch (error) {
    console.error('api error (middleware)', error);
    return next({ ...rest, payload: { error, ...payload } });
  }
}
