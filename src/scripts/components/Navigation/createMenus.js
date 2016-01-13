export default function(props) {
  const {
    roomsCount,
    playlistsCount
  } = props;

  return [
    {
      primary: true,
      title: 'Discover',
      items: [
        {
          icon: 'dashboard',
          path: '/rooms',
          label: 'rooms',
          count: roomsCount
        },
        {
          icon: 'library_music',
          path: '/playlists',
          label: 'playlists',
          count: playlistsCount
        }
      ]
    }
  ];
}
