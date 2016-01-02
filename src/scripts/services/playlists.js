import api from 'api/app';

export const index = () => api.get('playlists');
export const find = id => api.get(`playlists/${id}`);
