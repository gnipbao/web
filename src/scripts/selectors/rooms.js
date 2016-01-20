import { createSelector as selector } from 'reselect';

import { denormalize } from './base';
import { filters } from 'modules/rooms';

const filterFuncs = {
  [filters.all]: (coll) => coll,
  [filters.public]: (coll) => coll.filter(i => !i.private),
  [filters.private]: (coll) => coll.filter(i => i.private),
  [filters.my]: (coll, me) => coll.filter(i => i.owner === me)
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
    collection: filterFuncs[filter](collection, me)
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

export const show = selector(
  denormalize('rooms'),
  s => s.entities.users,
  s => s.entities.tracks,
  ({ data, ...source }, users, tracks) => ({
    ...source,
    users: data.users.map(id => users[id]),
    tracks: data.tracks.map(id => tracks[id])
  })
);
