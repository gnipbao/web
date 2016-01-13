import css from 'react-css-modules';

import Avatar from 'components/User/Avatar';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

const TooltipButton = Tooltip(Button);

import style from './style';

const { func, object, bool } = PropTypes;

export const Footer = (props) => {
  const { slim, logout, currentUser } = props;
  const { picture, nickname, first_name, role } = currentUser;

  return (
    <div styleName={ slim ? 'slim' : 'normal' }>
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
}

Footer.propTypes = {
  slim: bool.isRequired,
  logout: func.isRequired,
  currentUser: object.isRequired
};

export default css(Footer, style);
