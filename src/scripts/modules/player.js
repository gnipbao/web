import { action, reducer } from 'lib/redux';

export const togglePlay = action('player.togglePlay', playing => ({ playing }));
export const stop = action('player.stop');
export const changeTrack = action('player.changeTrack', id => ({ id }));
export const seek = action('player.seek', offset => ({ offset }));

const initialState = {
  playlist: null,
  track: null,
  offset: 0,
  playing: false
};

export default reducer({
  [togglePlay]: (s, { playing }) => ({ ...s, playing }),
  [stop]: s => ({ ...s, playing: false, track: null, offset: 0 }),
  [changeTrack]: ({ track, ...s }, { id }) => ({ ...s, playing: true, track: id || track }),
  [seek]: (s, { offset }) => ({ ...s, offset })
}, initialState);
