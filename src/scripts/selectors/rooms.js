import { createSelector as selector } from 'reselect';

import { denormalize } from './base';
import { Filters } from 'modules/rooms';

const filters = {
  [Filters.all]: (coll) => coll,
  [Filters.public]: (coll) => coll.filter(i => !i.private),
  [Filters.private]: (coll) => coll.filter(i => i.private),
  [Filters.my]: (coll, me) => coll.filter(i => i.owner === me)
};

function applySearchFilter(collection, query) {
  if (!query) return collection;

  return collection.filter(i =>
    i.name.includes(query) ||
    i.description && i.description.includes(query)
  );
}

export const filtered = selector(
  denormalize('rooms'),
  s => s.rooms.filter,
  s => s.auth.currentUserId,
  ({ collection, ...state }, filter, me) => ({
    ...state,
    collection: filters[filter](collection, me)
  })
);

export const list = selector(
  filtered,
  s => s.rooms.searchQuery,
  ({ collection, ...state }, query) => ({
    ...state,
    collection: applySearchFilter(collection, query)
  })
);

export const show = denormalize('rooms');
