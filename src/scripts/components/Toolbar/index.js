import pick from 'lodash/pick';
import { connect } from 'react-redux';

import css from 'react-css-modules';
import Sticky from 'react-sticky';
import Select from 'react-select';
import FontIcon from 'react-toolbox/lib/font_icon';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

import { toggle as toggleNavigation } from 'modules/navigation';

import Header from './header';
import style from './style';

const TooltipButton = Tooltip(Button);
const { bool, func, object, shape } = PropTypes;

export const Toolbar = (props) => {
  const { navigation, toggleNavigation } = props;

  const icon = navigation.slim ?
    'format_indent_increase' :
    'format_indent_decrease';

  return (
    <Sticky className={style.root}
      topOffset={120}
      type={React.DOM.section}>
      <Header slim={navigation.slim} title='Party Rooms' />
      <TooltipButton flat ripple={false}
        neutral={false}
        icon={icon}
        onClick={toggleNavigation}
        tooltip='Toggle navigation bar'
        styleName='toggle'
      />
    </Sticky>
  );
};

Toolbar.propTypes = {
  navigation: shape({ slim: bool.isRequired }),
  toggleNavigation: func.isRequired
};

function select(state) {
  return pick(state, 'navigation');
}

export default connect(
  select, { toggleNavigation }
)(css(Toolbar, style));
