import API from 'lib/api';

export const api = new API(settings.authRoot);

export function logout() {
  return api.post('logout');
}
