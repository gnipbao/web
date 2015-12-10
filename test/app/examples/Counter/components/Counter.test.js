import { shallow } from 'enzyme';

import Counter from 'examples/Counter/components/Counter';
import Button from 'react-toolbox/lib/button';

const { spy } = sinon;

describe('<Counter />', () => {
  const initialState = 4;

  let actions;
  let wrapper;

  beforeEach(() => {
    actions = {
      inc: spy(),
      dec: spy()
    };

    wrapper = shallow(
      <Counter
        counter={initialState}
        {...actions }
      />
    );
  });

  it('renders correclty', () => {
    const h3 = wrapper.find('h3');
    const h1 = wrapper.find('h1');
    const buttons = wrapper.find(Button);

    expect(h3.text()).to.equal('counter');
    expect(h1.text()).to.equal(initialState.toString());
    expect(buttons).to.have.length(2);
  });

  it('attaches event handlers', () => {
    const buttons = wrapper.find(Button);
    buttons.forEach(b => b.simulate('click'));

    expect(actions.inc).to.have.been.calledOnce
    expect(actions.dec).to.have.been.calledOnce
  });
});
