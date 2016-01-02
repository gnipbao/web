import css from 'react-css-modules';

import Avatar from 'react-toolbox/lib/avatar';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

const TooltipButton = Tooltip(Button);

import style from './style';
const { func, object, bool } = PropTypes;

export const Footer = ({ logout, user }) => {
  const { picture, first_name, last_name, role } = user;
  return (
    <div styleName='root'>
      <Avatar><img src={picture} /></Avatar>
      <dl styleName='info'>
        <dt>{first_name} {last_name}</dt>
        <dt>{role}</dt>
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
}

export default css(Footer, style);
