import { createAction, createReducer } from 'redux-act';
import { search } from 'api/500px';

export const load = createAction('load photos from 500px');
export const loadAsync = (category, pageNum) =>
  async (dispatch, getState) => {
    const page = pageNum || getState().fiveHundredPixels.page + 1;
    dispatch(load({ category, page }));

    try {
      const { photos } = await search(category, page);
      return dispatch(load({ category, page, photos }));
    } catch (error) {
      return dispatch(load({ category, page, error }));
    }
  };

export const initialState = {
  category: 'macro',
  page: 1,
  photos: [],
  loading: false
};

export default createReducer({
  [load]: (state, { category, photos, page }) => {
    if (!photos) return { ...state, loading: true };

    const newPhotos = page > 1 ?
      state.photos.concat(photos) : photos;

    return {
      ...state,
      category,
      loading: false,
      page,
      photos: newPhotos
    };
  }
}, initialState);
