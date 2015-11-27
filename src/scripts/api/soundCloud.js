import Client from './Client';

const api = new Client('http://localhost');

export const search = async (term) => {
  return await api.get('search', { term });
};
