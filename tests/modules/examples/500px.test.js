import fetchMock from 'fetch-mock';
import createStoreMock from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState, load, loadAsync } from 'modules/examples/500px';
import { api, url, searchParams } from 'api/500px';

const storeMock = createStoreMock([thunk]);

describe('500px module', () => {
  // it ('loads photos', (done) => {
  //   const category = 'nature';
  //   const page = 2;

  //   const photo1 = { title: 'one', image_url: 'http://example.com/image1.png' };
  //   const photo2 = { title: 'two', image_url: 'http://example.com/image2.png' };
  //   const photos = [photo1, photo2];

  //   const params = searchParams(category, page);

  //   fetchMock.mock(`^${url}`, photos);

  //   const expectedActions = [
  //     load({ category, page }),
  //     load({ category, page, photos })
  //   ];

  //   const store = storeMock(initialState, expectedActions, done);
  //   store.dispatch(loadAsync(category, page));
  // });
});
