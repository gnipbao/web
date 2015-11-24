import Client from './Client';

const api = new Client('https://api.500px.com/v1');

export const fetchPopular = async (term, page) => {
  return await api.get('photos/search', {
    term,
    page,
    rpp: 20,
    image_size: 440,
    sort: 'highest_rating',
    consumer_key: 'IEyOrnyulAcxcOxTGo6cS2Boq4bcuUxLMsFj1qg6'
  });
};
