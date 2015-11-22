import ApiClient from './ApiClient';

const api = new ApiClient('https://api.500px.com/v1');

export const popular = async (term, page, callback) => {
  return await api.get('photos/search', {
    term,
    page,
    rpp: 20,
    image_size: 440,
    sort: 'highest_rating',
    consumer_key: 'IEyOrnyulAcxcOxTGo6cS2Boq4bcuUxLMsFj1qg6'
  });
};
