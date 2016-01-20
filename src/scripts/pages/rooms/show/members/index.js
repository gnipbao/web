import css from 'react-css-modules';

import Item from './Item';
import style from './style';

const { bool, string, object, number } = PropTypes;

export const Members = (props) => {
  const { users } = props;

  return (
    <div styleName='root'>
      {users.map(user => <Item key={user.id} user={user} />)}
    </div>
  );
};

export default css(Members, style);
