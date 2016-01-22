import { createSelector as selector } from 'reselect';

export default selector(
  s => s.player,
  s => s.entities.tracks,
  s => s.entities.playlists,
  ({ track, playlist, ...state }, tracks, playlists) => ({
    ...state,
    track: tracks[track],
    playlist: {
      ...playlists[playlist],
      tracks: playlist &&
        playlists.tracks[id] &&
        playlists.tracks[id].ids.map(id => tracks[id])
    }
  })
);
