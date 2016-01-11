import api from 'api/app';

export const list = (page = 1, per_page = 2) => {
  return api.get('rooms', { page, per_page });
}

export const find = id => api.get(`rooms/${id}`);
