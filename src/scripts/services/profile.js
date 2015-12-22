import api from 'api/app';

export const index = () => api.get('profile');
export const invites = () => api.get('profile/invites');
export const identities = () => api.get('profile/identities');

export default {
  index,
  invites,
  identities
};
