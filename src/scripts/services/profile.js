import api from 'api/app';

export function load() {
  return api.get('profile');
}

export function invites() {
  return api.get('profile/invites');
}

export function identities() {
  return api.get('profile/identities');
}
