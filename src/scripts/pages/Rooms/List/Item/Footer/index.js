import css from 'react-css-modules';
import { enterAndRedirect } from 'modules/rooms';
import { connect } from 'react-redux';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import { CardActions } from 'react-toolbox/lib/card';

import style from './style';

const TooltipButton = Tooltip(Button);
const { bool, string, func } = PropTypes;

export const Footer = (props) => {
  const {
    id,
    currentUserId,
    canEnter,
    enterAndRedirect
  } = props;

  return (
    <CardActions styleName='root'>
      <TooltipButton styleName='listen' 
        icon='play_arrow'
        tooltip='listen' />
      <TooltipButton styleName='enter'
        icon='input'
        tooltip='enter'
        disabled={!canEnter}
        onClick={() => enterAndRedirect(id, currentUserId)}
      />
    </CardActions>
  );
};

Footer.propTypes = {
  id: string.isRequired,
  currentUserId: string.isRequired,
  canEnter: bool.isRequired,
  enterAndRedirect: func.isRequired
};

function select(state, ownProps) {
  const { auth: { currentUserId } } = state;
  return { currentUserId };
}

export default connect(
  select, { enterAndRedirect }
)(css(Footer, style));
