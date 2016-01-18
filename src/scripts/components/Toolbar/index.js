import { connect } from 'react-redux';
import css from 'react-css-modules';

import Select from 'react-select';
import FontIcon from 'react-toolbox/lib/font_icon';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

import { toggle as toggleNavigation } from 'modules/navigation';

import stickify from 'components/stickify';
import Header from './header';
import selector from './selector';
import style from './style';

const TooltipButton = Tooltip(Button);
const { bool, func, object, shape } = PropTypes;

export const Toolbar = (props) => {
  const { sticky, expanded, toggleNavigation } = props;

  const icon = expanded ?
    'format_indent_decrease' :
    'format_indent_increase';

  return (
    <header styleName={sticky ? 'sticky' : 'normal'}>
      <Header expanded={expanded} title='Party Rooms' />
      <TooltipButton flat ripple={false}
        neutral={false}
        icon={icon}
        onClick={toggleNavigation}
        tooltip='Toggle navigation bar'
        styleName='toggle'
      />
    </header>
  );
};

Toolbar.propTypes = {
  expanded: bool.isRequired,
  toggleNavigation: func.isRequired
};

export const StyledToolbar = css(Toolbar, style);
export const StickifiedToolbar = stickify(StyledToolbar, 300);
export default connect(
  selector, { toggleNavigation }
)(StickifiedToolbar);
