import api from 'api/app';

export const list = () => api.get('playlists');
export const find = id => api.get(`playlists/${id}`);
