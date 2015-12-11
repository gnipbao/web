import Client from './Client';

export const url = 'https://api.500px.com/v1';
export const api = new Client(url);
export const searchParams = (term, page) => ({
  term,
  page,
  rpp: 20,
  image_size: 440,
  sort: 'highest_rating',
  consumer_key: 'IEyOrnyulAcxcOxTGo6cS2Boq4bcuUxLMsFj1qg6',
});

export const search = (term, page) =>
  api.get('photos/search', searchParams(term, page));
