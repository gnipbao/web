import { shallow } from 'enzyme';

import Button from 'react-toolbox/lib/button';
import Footer from 'examples/Todo/components/Footer';

describe('<Footer />', () => {
  it('renders 2 buttons', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Button)).to.have.length(2);
  });

  it('correctly attaches click handlers', () => {
    const completeAll = sinon.spy();
    const clearCompleted = sinon.spy();

    const wrapper = shallow(<Footer {...{ completeAll, clearCompleted } } />);
    const buttons = wrapper.find(Button);
    buttons.forEach(b => b.simulate('click'));

    expect(completeAll.calledOnce).to.be.true;
  });
});
