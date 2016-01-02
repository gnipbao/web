import api from 'api/app';

export const index = () => api.get('rooms');
export const find = id => api.get(`rooms/${id}`);
