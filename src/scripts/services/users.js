import api from 'api/app';

export const list = ({ page = 1, count = 10 }) =>
  api.get('users', { page, per_page: count });

export const find = id => api.get(`users/${id}`);
