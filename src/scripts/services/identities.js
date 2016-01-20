import api from 'api/app;

export function syncAll() {
  return api.post('identities/sync');
}

export function sync(id) {
  return api.post(`identities/sync/${id}`);
}
