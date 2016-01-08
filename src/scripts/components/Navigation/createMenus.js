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
          count: 0
        },
        {
          icon: 'library_music',
          path: '/playlists',
          label: 'playlists',
          count: 0
        }
      ]
    }
  ];
}
