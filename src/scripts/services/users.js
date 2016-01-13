import api from 'api/app';

export function list({ page = 1, count = 10 }) {
  const params = { page, per_page: count };
  return api.get('users', params);
}

export function find({ id }) {
  return api.get(`users/${id}`);
}
