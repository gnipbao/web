import api from 'api/app';

export function list({ page = 1, count = 10} ) {
  const params = { page, per_page: count };
  return api.get('playlists', params);
}

export function find({ id }) {
  return api.get(`playlists/${id}`);
}

export const tracks = {
  list({ id, page = 1, count = 10 }) {
    const params = { page, per_page: count };
    return api.get(`playlists/${id}/tracks`, params);
  }
};
