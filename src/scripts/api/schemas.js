import { Schema, arrayOf } from 'normalizr';

const room = new Schema('rooms');
const roomArray = arrayOf(room);

const playlist = new Schema('playlists');
const playlistArray = arrayOf(playlist);

const track = new Schema('tracks');
const trackArray = arrayOf(track);

const user = new Schema('users');
const userArray = arrayOf(user);

const provider = new Schema('providers');

playlist.define({
  owner: user,
  provider
});

track.define({
  owner: user,
  provider
});

room.define({
  tracks: arrayOf(track),
  users: arrayOf(user),
  owner: user,
  playback: {
    track
  }
});

export {
  room, roomArray,
  playlist, playlistArray,
  track, trackArray,
  user, userArray,
  provider
};
