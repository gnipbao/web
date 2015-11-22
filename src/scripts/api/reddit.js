import ApiClient from './ApiClient';

const api = new ApiClient('http://reddit.com/r');

export const posts = async (reddit) => {
  return await fetch(reddit);
};
