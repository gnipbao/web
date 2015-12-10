import { shallow } from 'enzyme';

import List from 'react-toolbox/lib/list/List';

import Main from 'examples/Todo/components/Main';
import Item from 'examples/Todo/components/Item';

const { spy } = sinon;

describe('<Todo />', () => {
  describe('<Main />', () => {
    const items = [
      { id: 1, text: 'one', completed: false },
      { id: 2, text: 'two', completed: true }
    ];

    let actions;
    let wrapper;

    beforeEach(() => {
      actions = {
        edit: spy(),
        complete: spy(),
        del: spy()
      };

      wrapper = shallow(
        <Main items={items} {...actions} />
      );
    });

    it('renders correctly', () => {
      const lists = wrapper.find(List);
      expect(lists).to.have.length(1);

      const itemsList = lists.first();
      expect(itemsList.prop('selectable')).to.be.true;
      expect(itemsList.prop('ripple')).to.be.true;
    });
  });
});
