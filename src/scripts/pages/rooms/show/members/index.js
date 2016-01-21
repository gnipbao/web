import css from 'react-css-modules';

import Item from './Item';
import style from './style';

const { bool, string, object, number } = PropTypes;

export const Members = (props) => {
  const { users } = props;

  return (
    <aside styleName='members'>
      {users.map(user => <Item key={user.id} user={user} />)}
    </aside>
  );
};

export default css(Members, style);
