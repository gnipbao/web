import { shallow } from 'enzyme';

import Button from 'react-toolbox/lib/button';
import Footer from 'examples/Todo/components/Footer';

describe('<Footer />', () => {
  it('correctly attaches click handlers', () => {
    const completeAll = sinon.spy();
    const clearCompleted = sinon.spy();

    const wrapper = shallow(<Footer {...{ completeAll, clearCompleted } } />);
    const buttons = wrapper.find(Button);
    buttons.forEach(b => b.simulate('click'));

    expect(completeAll.calledOnce).to.be.true;
    expect(clearCompleted.calledOnce).to.be.true;
  });
});
