import api from 'api/app';

export const list = (page = 1, per_page = 10) =>
  api.get('users', { page, per_page });

export const find = id => api.get(`users/${id}`);
