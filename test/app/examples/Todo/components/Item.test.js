import { shallow } from 'enzyme';
import { findFirst } from 'test-utils';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import Item from 'examples/Todo/components/Item';
import Icon from 'examples/Todo/components/Item/Icon';
import Checkbox from 'examples/Todo/components/Item/Checkbox';

const { spy } = sinon;
const icon = 'comment';
const item = {
  id: 3,
  text: 'get the shit done',
  completed: false
};

describe('<Todo />', () => {
  describe('<Item />', () => {
    let actions;
    let wrapper;

    beforeEach(() => {
      actions = {
        edit: spy(),
        del: spy(),
        complete: spy()
      };

      wrapper = shallow(
        <Item
          item={item}
          icon={icon}
          {...actions}
        />
      );
    });

    describe('rendering', () => {
      context('in normal state', () => {
        it('renders checkbox, label, and delete button', () => {
          const icon = findFirst(wrapper, Icon);
          const completeCheckbox = findFirst(wrapper, Checkbox);
          const deleteButton = findFirst(wrapper, Button);

          expect(icon).to.exist;
          expect(completeCheckbox).to.exist;
          expect(deleteButton).to.exist;

          expect(deleteButton.prop('floating')).to.be.true;
          expect(deleteButton.prop('mini')).to.be.true;
          expect(deleteButton.prop('icon')).to.be.equal('delete');
        });
      });

      context('in editing state', () => {
        beforeEach(() => {
          const completeCheckbox = findFirst(wrapper, Checkbox);
          completeCheckbox.simulate('doubleClick');
        });

        it('renders input', () => {
          const textInput = findFirst(wrapper, Input);
          expect(textInput.get(0)).to.exist;
        });
      });
    });

    it('handles events', () => {
    });
  });
});
