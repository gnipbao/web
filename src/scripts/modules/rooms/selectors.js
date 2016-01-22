import { createSelector as selector } from 'reselect';

import { denormalize } from 'selectors';
import filters from 'modules/rooms/filters';

const filterFuncs = {
  [filters.all]: (coll) => coll,
  [filters.public]: (coll) => coll.filter(r => !r.private),
  [filters.private]: (coll) => coll.filter(r => r.private),
  [filters.my]: (coll, me) => coll.filter(r => r.owner === me)
};

function applySearchFilter(collection, query) {
  if (!query) return collection;

  return collection.filter(room =>
    room.name.includes(query) ||
    room.description && room.description.includes(query)
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
  s => s.player,
  ({ data, ...source }, users, tracks, player) => ({
    ...source,
    users: data.users.map(id => users[id]),
    tracks: data.tracks.map(id => tracks[id]),
    player
  })
);
