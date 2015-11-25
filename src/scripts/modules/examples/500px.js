import { createAction, handleActions } from 'redux-actions';
import { searchPhotos } from 'api/500px';

const REQUEST = '500PX_REQUEST';
const RESPONSE = '500PX_RESPONSE';

const request = createAction(REQUEST);
const response = createAction(RESPONSE);

export const loadPhotos = (term, page) =>
  async (dispatch, getState) => {
    const requestPage = page || getState().fiveHundredPixels.page + 1;

    const requestAction = request({ term, page: requestPage });
    dispatch(requestAction);

    const { photos } = await searchPhotos(term, requestPage);

    const responseAction = response({ photos, page: requestPage });
    return dispatch(responseAction);
  };

const initialState = {
  page: 1,
  photos: [],
  loading: false
};

export default handleActions({
  [REQUEST]: s => ({ ...s, photos: [], loading: true }),
  [RESPONSE]: (s, { payload: { photos, page } }) =>
    ({ ...s, loading: false, photos, page })
}, initialState);
