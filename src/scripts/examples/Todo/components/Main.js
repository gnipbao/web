import List from 'react-toolbox/lib/list/List';
import Item from './Item';

const { func, arrayOf, object } = PropTypes;

const Main = ({ items, ...actions }) => (
  <List selectable ripple>
    {items.map(item =>
      <Item
        key={item.id}
        item={item}
        icon='comment'
        {...actions}
      />
    )}
  </List>
);

Main.propTypes = {
  complete: func.isRequired,
  del: func.isRequired,
  items: arrayOf(object).isRequired
};

export default Main;
