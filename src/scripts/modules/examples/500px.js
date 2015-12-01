import { createAction, createReducer } from 'redux-act';
import { searchPhotos } from 'api/500px';

const load = createAction('load photos from 500px');

export const loadPhotos = (category, pageNum) =>
  async (dispatch, getState) => {
    const page = pageNum || getState().fiveHundredPixels.page + 1;
    dispatch(load({ category, page }));

    const { photos } = await searchPhotos(category, page);
    return dispatch(load({ category, photos, page }));
  };

const initialState = {
  category: 'macro',
  page: 1,
  photos: [],
  loading: false
};

export default createReducer({
  [load]: (state, { category, photos, page }) => {
    if (!photos) {
      return {
        ...state,
        loading: true
      };
    }

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
