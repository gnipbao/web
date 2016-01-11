import { camelizeKeys } from 'humps';
import { normalize } from 'normalizr';

export const API = Symbol('API');

const transform = (json, schema) => {
  const camelized = camelizeKeys(json);
  return normalize(camelized, schema);
};

export default ({ dispatch, getState }) => next => async (action) => {
  const { meta } = action;
  if (!meta || !meta[API]) return next(action);

  next(action);

  try {
    const { request, schema } = meta[API];
    const { payload, ...rest } = action;

    const response = await request();
    const { json, links } = response;
    const normalized = transform(json, schema);
    const data = { ...normalized, links };

    return next({ ...rest, payload: { data, ...payload } });
  } catch (error) {
    console.error('api error (middleware)', error);
    return next({ ...rest, payload: { error, ...payload } });
  }
}
