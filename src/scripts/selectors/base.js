import { createSelector as selector } from 'reselect';

export const denormalize = key => selector(
  s => s[key],
  s => s.entities[key],
  (_, { params }) => params && params.id,

  ({ ids, ...state }, source, id) => {
    const data = id ?
      { data: source[id] } :
      { collection: ids.map(id => source[id]) };

    return { ...state, ...data };
  }
);
