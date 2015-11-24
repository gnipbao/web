import { List, ListSubHeader } from 'react-toolbox/lib/list';

import Item from './Item';

export default ({ reddit, items }) => {
  return (
    <List>
      <ListSubHeader caption={reddit} />
      {items.map((post, i) => <Item key={i} {...post} />)}
    </List>
  );
};
