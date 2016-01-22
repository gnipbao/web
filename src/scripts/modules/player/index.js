import isUndefined from 'lodash/isUndefined';
import { reducer } from 'lib/redux';
import { togglePlay, stop, changeTrack, updateTime, seek } from './actions';

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
