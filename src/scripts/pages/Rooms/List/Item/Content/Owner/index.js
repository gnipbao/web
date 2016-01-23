import css from 'react-css-modules';
import { Link } from 'react-router';

import Avatar from 'components/user/avatar';
import style from './style';

const { object } = PropTypes;

export const Owner = ({ user }) => {
  const { id, firstName, lastName, karma, state, ...avatarProps } = user;
  const username = `${firstName} ${lastName}`;

  return (
    <dl styleName='root'>
      <dt>
        <Avatar rounded rotate
          styleName='avatar'
          online={state === 'online'}
          { ...{ ...avatarProps, id } }
        />
      </dt>
      <dd styleName='details'>
        <span styleName='username'>
          <Link to={`/users/${id}`}>{username}</Link>
        </span>
        <span styleName='karma'>{karma.toFixed(2)}</span>
      </dd>
    </dl>
  );
};

Owner.propTypes = {
  user: object.isRequired
};

export default css(Owner, style);
