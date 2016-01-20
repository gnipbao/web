import css from 'react-css-modules';
import { connect } from 'react-redux';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import { CardActions } from 'react-toolbox/lib/card';

import { actions } from 'modules/rooms';

import style from './style';

const TooltipButton = Tooltip(Button);
const { bool, string, func } = PropTypes;

export const Footer = (props) => {
  const { id, currentUserId, inside } = props;

  const membershipAction = inside ? 'exit' : 'enter';
  const membershipActionHandler = () => props[membershipAction](id, currentUserId);

  return (
    <CardActions styleName='root'>
      <TooltipButton styleName='view' 
        neutral={false}
        icon='visibility'
        tooltip='view' />
      <TooltipButton styleName='favorite' 
        neutral={false}
        icon='favorite_border'
        tooltip='add to favorites' />
      <TooltipButton styleName='listen' 
        neutral={false}
        icon='hearing'
        tooltip='listen' />
      <TooltipButton styleName={membershipAction}
        neutral={false}
        icon={ inside ? 'eject' : 'input' }
        tooltip={membershipAction}
        onClick={membershipActionHandler}
      />
    </CardActions>
  );
};

Footer.propTypes = {
  id: string.isRequired,
  currentUserId: string.isRequired,
  inside: bool.isRequired,
  enter: func.isRequired,
  exit: func.isRequired
};

function select(state) {
  const { auth: { currentUserId } } = state;
  return { currentUserId };
}

export default connect(select, actions.room)(css(Footer, style));
