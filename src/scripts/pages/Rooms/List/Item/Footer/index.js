import css from 'react-css-modules';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import { CardActions } from 'react-toolbox/lib/card';

import style from './style';

const TooltipButton = Tooltip(Button);
const { array, object, bool, func } = PropTypes;

export const Footer = (props) => {
  return (
    <CardActions styleName='root'>
      <TooltipButton styleName='listen' 
        icon='play_arrow'
        tooltip='listen' />
      <TooltipButton styleName='join'
        icon='input'
        tooltip='join' />
    </CardActions>
  );
};

export default css(Footer, style);
