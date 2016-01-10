import api from 'api/app';

export const load = () => api.get('profile');
export const invites = () => api.get('profile/invites');
export const identities = () => api.get('profile/identities');
