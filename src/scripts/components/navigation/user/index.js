import css from 'react-css-modules';

import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

import Avatar from 'components/user/avatar';
import style from './style';

const TooltipButton = Tooltip(Button);
const { func, object, bool } = PropTypes;

export const User = (props) => {
  const { expanded, logout, currentUser } = props;
  const { picture, nickname, first_name, role } = currentUser;

  return (
    <div styleName={ expanded ? 'expanded' : 'collapsed' }>
      <Avatar rounded small rotate
        styleName='avatar'
        { ...{ nickname, first_name, picture } }
      />
      <dl styleName='info'>
        <dt styleName='username'>{first_name}</dt>
        <dt styleName='role'>{role}</dt>
      </dl>
      <div styleName='actions'>
        <TooltipButton
          floating
          mini
          primary
          icon='exit_to_app'
          tooltip='sign out'
          onClick={logout}
        />
      </div>
    </div>
  );
};

User.propTypes = {
  expanded: bool.isRequired,
  logout: func.isRequired,
  currentUser: object.isRequired
};

export default css(User, style);
