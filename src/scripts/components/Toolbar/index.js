import css from 'react-css-modules';

import Select from 'react-select';
import FontIcon from 'react-toolbox/lib/font_icon';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import Input from 'react-toolbox/lib/input';

const TooltipButton = Tooltip(Button);

import style from './style';

const { bool, func, object } = PropTypes;

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

export const Toolbar = (props) => {
  const { navigation } = props;

  return (
    <div styleName='root'>
      <TooltipButton flat ripple={false}
        icon={ navigation.slim ? 'format_indent_increase' : 'format_indent_decrease' }
        onClick={navigation.toggle}
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
      <Select
        name='form-field-name'
        value='one'
        options={options}
      />
    </div>
  );
};

Toolbar.propTypes = {
  navigation: object.isRequired,
};

export default css(Toolbar, style);
