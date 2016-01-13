import css from 'react-css-modules';
import { enterAndRedirect } from 'modules/rooms';
import { connect } from 'react-redux';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import { CardActions } from 'react-toolbox/lib/card';

import style from './style';

const TooltipButton = Tooltip(Button);
const { string, func } = PropTypes;

export const Footer = (props) => {
  const { id, currentUserId, enterAndRedirect } = props;

  return (
    <CardActions styleName='root'>
      <TooltipButton styleName='listen' 
        icon='play_arrow'
        tooltip='listen' />
      <TooltipButton styleName='enter'
        icon='input'
        tooltip='enter'
        onClick={() => enterAndRedirect(id, currentUserId)}
      />
    </CardActions>
  );
};

Footer.propTypes = {
  id: string.isRequired,
  currentUserId: string.isRequired,
  enterAndRedirect: func.isRequired
};

function select(state) {
  const { auth: { data: { sub } } } = state;
  return { currentUserId: sub };
}

export default connect(
  select,
  { enterAndRedirect }
)(css(Footer, style));
