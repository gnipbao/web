import css from 'react-css-modules';

import FontIcon from 'react-toolbox/lib/font_icon';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import Input from 'react-toolbox/lib/input';
import { Menu, MenuItem, MenuDivider, IconMenu } from 'react-toolbox/lib/menu';

import style from './style';

const { bool, string, number, func } = PropTypes;

export const Toolbar = (props) => {
  return (
    <div styleName='root'>
      <Button icon='format_indent_decrease' />
      <Input type='text' label='search rooms' />
      <IconMenu icon='more_vert' position='top-left' menuRipple>
        <MenuItem value='download' icon='get_app' caption='Download' />
        <MenuItem value='help' icon='favorite' caption='Favorite' />
        <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
        <MenuDivider />
        <MenuItem value='signout' icon='delete' caption='Delete' disabled />
      </IconMenu>
    </div>
  );
};

export default css(Toolbar, style);
