import List from 'react-toolbox/lib/list/List';
import ListSubheader from 'react-toolbox/lib/list/ListSubheader';

import Item from './Item';

export default ({ reddit, items }) => {
  return (
    <List>
      <ListSubheader caption={reddit} />
      {items.map((post, i) => <Item key={i} {...post} />)}
    </List>
  );
};
