import List from 'react-toolbox/lib/list/List';

import Item from './Item';

export default ({ reddit, items }) => {
  return (
    <List>
      {items.map((post, i) => <Item key={i} {...post} />)}
    </List>
  );
};
