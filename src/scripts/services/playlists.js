import api from 'api/app';

export function fetch({ id }) {
  return api.get(`playlists/${id}`);
}

export function list({ page = 1, count = 10 }) {
  return api.get('playlists', { page, per_page: count });
}

export const tracks = {
  list({ id, page = 1, count = 20 }) {
    return api.get(`playlists/${id}/tracks`, {
        page,
        per_page: count
      }
    );
  }
};
