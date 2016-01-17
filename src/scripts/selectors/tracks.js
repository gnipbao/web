import { createSelector as selector } from 'reselect';

export const list = selector(
  (s, { params: { id } }) => s.playlists.tracks[id],
  s => s.player.track,
  s => s.entities.tracks,
  (state, currentTrack, source) => ({
    ...state,
    currentTrack,
    collection: state && state.ids.map(id => source[id])
  })
);
