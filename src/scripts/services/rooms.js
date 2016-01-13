import api from 'api/app';

export function list({ page = 1, count = 10 }) {
  return api.get('rooms', { page, per_page: count });
}

export function find({ id }) {
  return api.get(`rooms/${id}`);
}

export function enter({ id, userId }) {
  return api.post(`rooms/${id}/users`, { user_id: userId });
}
