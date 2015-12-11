import { createReducer as reducer } from 'redux-act';

import { asyncAction } from 'lib/redux';
import { search } from 'api/500px';

export const load = asyncAction('500px.load',
  ({ category, page }, _state ) => search(category, page),
  (category, page) => ({ category, page })
);

export const initialState = {
  category: 'macro',
  page: 1,
  photos: [], 
  loading: false
};

export default reducer({
  [load]: (state, { category, page, data, error }) => {
    if (!data) return { ...state, loading: true };
    if (error) return state;

    const { photos } = data;

    const nextPhotos = page > 1 ? state.photos.concat(photos) : photos;
    const nextPage = data ? page + 1 : page;

    return {
      ...state,
      category,
      loading: false,
      page: nextPage,
      photos: nextPhotos
    };
  }
}, initialState);
