import api from 'api/app';

export const list = () => api.get('users');
export const find = id => api.get(`users/${id}`);
