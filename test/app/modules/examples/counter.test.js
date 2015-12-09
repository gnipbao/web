import reducer, { inc, dec } from 'modules/examples/counter';

describe('counter module', () => {
  it('returns initial state if its undefined', () => {
    expect(reducer(undefined, {})).to.equal(0);
  });

  it('increases', () => {
    expect(reducer(0, inc())).to.equal(1);
  });

  it('decreases', () => {
    expect(reducer(0, dec())).to.equal(-1);
  });
});
