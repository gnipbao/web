import css from 'react-css-modules';

import Item from './Item';
import style from './style';

const { bool, object, func } = PropTypes;

const Members = (props) => {
  const { users } = props;

  return (
    <div styleName='members'>
      {users.map(user => <Item key={user.id} user={user} />)}
    </div>
  );
}

export default css(Members, style);
