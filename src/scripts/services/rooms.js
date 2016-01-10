import api from 'api/app';

export const list = () => api.get('rooms');
export const find = id => api.get(`rooms/${id}`);
