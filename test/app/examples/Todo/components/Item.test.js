import { shallow } from 'enzyme';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import Item from 'examples/Todo/components/Item';
import Icon from 'examples/Todo/components/Item/Icon';
import Checkbox from 'examples/Todo/components/Item/Checkbox';

const { spy } = sinon;

describe('<Todo />', () => {
  describe('<Item />', () => {
    const icon = 'comment';
    const item = {
      id: 3,
      text: 'get the shit done',
      completed: false
    };

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

    it('renders correctly', () => {
    });

    it('handles events', () => {
    });
  });
});
