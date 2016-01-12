import css from 'react-css-modules';
import { pushPath } from 'redux-simple-router';
import { connect } from 'react-redux';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import { CardActions } from 'react-toolbox/lib/card';

import style from './style';

const TooltipButton = Tooltip(Button);
const { string, func } = PropTypes;

export const Footer = (props) => {
  const { pushPath, id } = props;

  return (
    <CardActions styleName='root'>
      <TooltipButton styleName='listen' 
        icon='play_arrow'
        tooltip='listen' />
      <TooltipButton styleName='enter'
        icon='input'
        tooltip='enter'
        onClick={() => pushPath(`/rooms/${id}`)}
      />
    </CardActions>
  );
};

Footer.propTypes = {
  id: string.isRequired,
  pushPath: func.isRequired
};

export default connect(s => s, { pushPath })(css(Footer, style));
