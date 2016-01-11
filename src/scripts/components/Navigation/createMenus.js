export default function(props) {
  return [
    {
      primary: true,
      title: 'Discover',
      items: [
        {
          icon: 'dashboard',
          path: '/rooms',
          label: 'rooms',
          count: props.rooms.ids.length
        },
        {
          icon: 'library_music',
          path: '/playlists',
          label: 'playlists',
          count: props.playlists.ids.length
        }
      ]
    }
  ];
}
