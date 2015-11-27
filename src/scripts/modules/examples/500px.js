import { createAction, handleActions } from 'redux-actions';
import { searchPhotos } from 'api/500px';

const REQUEST = '500PX_REQUEST';
const RESPONSE = '500PX_RESPONSE';

const request = createAction(REQUEST);
const response = createAction(RESPONSE);

export const loadPhotos = (category, pageNum) =>
  async (dispatch, getState) => {
    const page = pageNum || getState().fiveHundredPixels.page + 1;
    dispatch(request({ category, page }));

    const { photos } = await searchPhotos(category, page);
    return dispatch(response({ category, photos, page }));
  };

const initialState = {
  category: 'nude',
  page: 1,
  photos: [],
  loading: false
};

export default handleActions({
  [REQUEST]: s => ({ ...s, loading: true }),
  [RESPONSE]: (s, { payload: { category, photos, page } }) => {
    const newPhotos = page > 1 ? s.photos.concat(photos) : photos;
    return {
      ...s,
      category,
      loading: false,
      page,
      photos: newPhotos
    };
  }
}, initialState);
