import api from 'api/app';

export const list = ({ page = 1, count = 10 }) =>
  api.get('rooms', { page, per_page: count });

export const find = id =>
  api.get(`rooms/${id}`);

export const enter = ({ id, userId }) =>
  api.post(`rooms/${id}/users`, { user_id: userId });
