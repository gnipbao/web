import { shallow } from 'enzyme';

import { Header } from 'examples/Todo/components/Header';
import Filter from 'examples/Todo/components/Filter';
import Input from 'react-toolbox/lib/input';

const { spy } = sinon;

describe('<Todo />', () => {
  describe('<Header />', () => {
    const label = 'What needs to be done?';
    const fields = { title: 'test' };

    let actions;
    let wrapper;

    beforeEach(() => {
      actions = { add: spy() };
      wrapper = shallow(
        <Header
          {...actions}
          fields={fields}
        />
      );
    });

    it('renders correctly', () => {
      const inputs = wrapper.find(Input);
      expect(inputs).to.have.length(1);

      expect(wrapper.find(Filter)).to.have.length(1);

      const titleInput = inputs.first();
      expect(titleInput.prop('label')).to.equal(label);
      expect(titleInput.prop('required')).to.be.true;
    });

    it('handles events', () => {
      const titleInput = wrapper.find(Input).first();
      titleInput.simulate('keyPress', {
        keyCode: 65, which: 65,
        target: { value: 'wont catch this' }
      });
      expect(actions.add).to.have.not.been.called;

      titleInput.simulate('keyPress', {
        keyCode: 13, which: 13,
        target: { value: 'todo' }
      });
      expect(actions.add).to.have.been.calledOnce;
      expect(actions.add).to.have.been.calledWithExactly('todo');
    });
  });
});
