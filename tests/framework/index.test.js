import assert from 'assert';
import fetchMock from 'fetch-mock';

describe('framework', () => {
  describe('karma plugins', () => {
    it ('exposes "expect" globally', () => {
      assert.equal(typeof expect, 'function');
    });

    it ('exposes "should" globally', () => {
      assert.equal(typeof should, 'object');
    });

    it ('has chai-as-promised helpers', () => {
      const pass = new Promise(res => res('test'));
      const fail = new Promise((res, rej) => rej());

      return Promise.all([
        expect(pass).to.be.fulfilled,
        expect(fail).to.not.be.fulfilled
      ]);
    });
  });

  // describe('fetch-mock', () => {
  //   it('mocks simplest http get request', (done) => {
  //     fetchMock.mock('http://ya.ru', 301);
  //     fetch('http://ya.ru').then(res => {
  //       console.log('value');
  //       expect(fetchMock.calls().length).to.equal(1);
  //       expect(res.status).to.equal(301);
  //       fetchMock.restore();
  //       done();
  //     });
  //   });
  // });
});
