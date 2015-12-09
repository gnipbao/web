import { renderIntoDocument } from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { create as createStore } from 'store';

import Counter from 'examples/Counter/components/Counter';

describe('<Counter />', () => {
  const initialState = { counter: 0 };
  const store = createStore(initialState);
  const renderer = renderIntoDocument(
    <Provider store={store} key='provider'>
      <Counter
        counter={initialState.counter}
        inc={_ => _}
        dec={_ => _}
      />
    </Provider>
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it('renders correclty', () => {
    return expect(renderer).to.be.ok;
  });

  it('has correct class name', () => {
  });
});
