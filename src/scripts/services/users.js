import api from 'api/app';

export const index = () => api.get('users');
export const find = id => api.get(`users/${id}`);
