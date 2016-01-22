import { createSelector as selector } from 'reselect';

export const list = selector(
  (s, { params: { id } }) => s.playlists.tracks[id],
  s => s.player,
  s => s.entities.tracks,
  (state, player, source) => ({
    ...state,
    player,
    collection: state && state.ids.map(id => source[id])
  })
);
