import css from 'react-css-modules';
import { Link } from 'react-router';
import Avatar from 'components/user/avatar';

import style from './style';

const { bool, string, object, number } = PropTypes;

export const Item = (props) => {
  const {
    id, firstName, lastName,
    karma, state,
    ...avatarProps
  } = user;

  const username = `${firstName} ${lastName}`;

  return (
    <div styleName='root'>
      <Avatar rounded rotate
        styleName='avatar'
        { ...{ ...avatarProps, id } }
      />
      <span styleName='username'>
        <Link to={`/users/${id}`}>{username}</Link>
      </span>
    </div>
  );
};

export default css(Item, style);
