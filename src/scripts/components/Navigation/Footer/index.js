import css from 'react-css-modules';

import Avatar from 'react-toolbox/lib/avatar';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

const TooltipButton = Tooltip(Button);

import style from './style';
const { func, object, bool } = PropTypes;

export const Footer = ({ slim, pushPath, logout, user }) => {
  const { picture, nickname, first_name, role } = user;

  return (
    <div styleName={ slim ? 'slim' : 'normal' }>
      <Avatar styleName='avatar'
        image={picture} title={picture ? null : nickname || first_name}
        onClick={() => pushPath('/profile')} />
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
  logout: func.isRequired,
  slim: bool.isRequired
}

export default css(Footer, style);
