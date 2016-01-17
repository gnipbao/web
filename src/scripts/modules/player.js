import isUndefined from 'lodash/isUndefined';
import { action, reducer } from 'lib/redux';

export const togglePlay = action('player.togglePlay', playing => ({ playing }));
export const stop = action('player.stop');
export const changeTrack = action('player.changeTrack', id => ({ id }));
export const updateTime = action('player.updateTime', offset => ({ offset }));
export const seek = action('player.seek', offset => ({ offset }));

const initialState = {
  playlist: null,
  track: null,
  offset: 0,
  playing: false
};

export default reducer({
  [togglePlay]: (state, { playing }) => ({
    ...state,
    playing: isUndefined(playing) ?
      !state.playing : playing
  }),

  [stop]: state => ({
    ...state,
    playing: false,
    track: null,
    offset: 0
  }),

  [changeTrack]: ({ track, ...state }, { id }) => ({
    ...state,
    playing: true,
    track: id || track
  }),

  [updateTime]: (s, { offset }) => ({ ...s, offset }),
  [seek]: (s, { offset }) => ({ ...s, offset })
}, initialState);
