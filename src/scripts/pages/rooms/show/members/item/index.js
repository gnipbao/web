import css from 'react-css-modules';
import { Link } from 'react-router';
import Avatar from 'components/user/avatar';

import style from './style';

const { bool, string, object, number } = PropTypes;

export const Item = ({ user }) => {
  const {
    id, firstName, lastName,
    karma, state,
    ...avatarProps
  } = user;

  const username = `${firstName} ${lastName}`;

  return (
    <div styleName='root'>
      <Avatar small rounded rotate styleName='avatar'
        { ...{ ...avatarProps, id } } />
      <Link styleName='username' to={`/users/${id}`}>
        {username}
      </Link>
    </div>
  );
};

export default css(Item, style);
