import pick from 'lodash/object/pick';
import { connect } from 'react-redux';

import css from 'react-css-modules';
import Select from 'react-select';
import FontIcon from 'react-toolbox/lib/font_icon';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import Input from 'react-toolbox/lib/input';

import { toggle as toggleNavigation } from 'modules/navigation';

import style from './style';

const TooltipButton = Tooltip(Button);
const { bool, func, object, shape } = PropTypes;

export const Toolbar = (props) => {
  const { navigation, toggleNavigation } = props;

  const icon = navigation.slim ?
    'format_indent_increase' :
    'format_indent_decrease';

  return (
    <div styleName='root'>
      <TooltipButton flat ripple={false}
        icon={icon}
        onClick={toggleNavigation}
        tooltip='Toggle navigation bar'
        styleName='toggle'
      />
      <TooltipButton flat
        icon='search'
        tooltip='Search rooms'
        styleName='search'
      />
      <Input type='text'
        label='search rooms'
        styleName='input'
      />
    </div>
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
