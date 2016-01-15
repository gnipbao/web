import { createSelector as selector } from 'reselect';

export const list = selector(
  (s, { params: { id } }) => s.playlists.tracks[id],
  s => s.entities.tracks,
  (state, source) => ({
    ...state,
    collection: state && state.ids.map(id => source[id])
  })
);
