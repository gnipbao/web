import api from 'api/app';

export const logout = () => api.post('auth/logout');

export default { logout };
