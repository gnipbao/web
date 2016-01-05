import css from 'react-css-modules';

import FontIcon from 'react-toolbox/lib/font_icon';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import Input from 'react-toolbox/lib/input';

const TooltipButton = Tooltip(Button);

import style from './style';

const { bool, func, object } = PropTypes;

export const Toolbar = (props) => {
  const { navigation } = props;

  return (
    <div styleName='root'>
      <TooltipButton flat ripple={false}
        icon={ navigation.slim ? 'format_indent_increase' : 'format_indent_decrease' }
        onClick={navigation.toggle}
        tooltip='Toggle navigation bar'
        className={style.toggle}
      />
      <TooltipButton flat
        icon='search'
        tooltip='Search rooms'
        className={style.search}
      />
      <Input type='text'
        label='search rooms'
        className={style.input}
      />
    </div>
  );
};

Toolbar.propTypes = {
  navigation: object.isRequired,
};

export default css(Toolbar, style);
