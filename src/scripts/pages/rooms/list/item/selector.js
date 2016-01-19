import includes from 'lodash/includes';
import { createSelector as selector } from 'reselect';

export default selector(
  s => s.auth.currentUserId,
  (_, { owner, playback, ...room }) => ({
    owner,
    playback,
    room
  }),
  s => s.entities.users,
  s => s.entities.tracks,

  (currentUserId, params, users, tracks) => ({
    ...params.room,
    owner: users[params.owner],
    playback: params.playback ? {
      ...playback,
      track: tracks[params.playback.track]
    } : null,
    inside: includes(params.room.users, currentUserId)
  })
);
