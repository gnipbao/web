export default function(user) {
  return [
    {
      primary: true,
      title: 'Discover',
      items: [
        { icon: 'dashboard', path: '/rooms', label: 'rooms', count: 4 },
        { icon: 'library_music', path: '/playlists', label: 'playlists', count: 10 }
      ]
    }
  ];
}
    
