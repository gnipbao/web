import { shallow } from 'enzyme';

import Button from 'react-toolbox/lib/button';
import Footer from 'examples/Todo/components/Footer';

const { spy } = sinon;

describe('<Todo />', () => {
  describe('<Footer />', () => {
    let actions;
    let wrapper;

    beforeEach(() => {
      actions = {
        completeAll: spy(),
        clearCompleted: spy()
      };

      wrapper = shallow(
        <Footer {...actions } />
      );
    });

    it('renders correctly', () => {
      const buttons = wrapper.find(Button);
      expect(buttons).to.have.length(2);
    });

    it('handles events', () => {
      const { completeAll, clearCompleted } = actions;
      const buttons = wrapper.find(Button);

      buttons.forEach(b => b.simulate('click'));

      expect(completeAll).to.have.been.calledOnce;
      expect(clearCompleted).to.have.been.calledOnce;
    });
  });
});
