import { renderIntoDocument } from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { create as createStore } from 'store';

import Counter from 'examples/Counter/components/Counter';

describe('<Counter />', () => {
  const mockStore = {};

  const store = createStore();
  const renderer = renderIntoDocument(
    <Provider store={store} key='provider'>
      <Counter
        counter={0}
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
