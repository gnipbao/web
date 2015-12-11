import fetchMock from 'fetch-mock';
import mockStore from '../../../utils/mockStore';
import thunk from 'redux-thunk';
import apiMiddleware from 'store/middleware/custom/api';
import { initialState, load } from 'modules/examples/500px';
import { api, url, searchParams } from 'api/500px';

const mock = mockStore([apiMiddleware]);

describe('500px module', () => {
  it ('loads photos', (done) => {
    done(); // <--

    const category = 'nature';
    const page = 1;

    const photo1 = { title: 'one', image_url: 'http://example.com/image1.png' };
    const photo2 = { title: 'two', image_url: 'http://example.com/image2.png' };
    const data = [photo1, photo2];

    const params = searchParams(category, page);

    const requestUrl = api.url('photos/search', params);
    fetchMock.mock(requestUrl, { status: 200, body: { data } });

    const expectedActions = [
      { what: 'should', be: 'here 1?' }, // id is always changing
      { what: 'should', be: 'here 2?' }
    ];

    const store = mock(initialState, expectedActions, done);
    // store.dispatch(load(category, page));
  });
});
