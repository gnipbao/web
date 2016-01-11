import css from 'react-css-modules';

import Avatar from 'components/User/Avatar';
import style from './style';

const { object } = PropTypes;

export const Owner = ({ user }) => {
  const { firstName, lastName, karma, ...avatarProps } = user;
  const username = `${firstName} ${lastName}`;

  return (
    <dl styleName='root'>
      <dt><Avatar rounded rotate styleName='avatar' { ...avatarProps } /></dt>
      <dd styleName='details'>
        <span styleName='username'>{username}</span>
        <span styleName='karma'>{karma.toFixed(2)}</span>
      </dd>
    </dl>
  );
};

Owner.propTypes = {
  user: object.isRequired
};

export default css(Owner, style);
