import { createStructuredSelector as selector } from 'reselect';

export default selector({
  currentUser: s => s.auth.currentUser,
  expanded: s => s.navigation.expanded,
  roomsCount: s => s.rooms.ids.length,
  playlistsCount: s => s.playlists.ids.length
});
