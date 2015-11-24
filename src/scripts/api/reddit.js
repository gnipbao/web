import Client from './Client';

const api = new Client('https://www.reddit.com/r');

export const fetchPosts = async (reddit) =>
  await api.get(`${reddit}.json`);
