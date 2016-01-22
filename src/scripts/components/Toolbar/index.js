import { connect } from 'react-redux';
import css from 'react-css-modules';

import Select from 'react-select';
import FontIcon from 'react-toolbox/lib/font_icon';
import Button from 'react-toolbox/lib/button';

import * as navigationActions from 'modules/navigation/actions';

import stickify from 'components/stickify';
import Header from './header';
import selector from './selector';
import style from './style';

const { bool, func, object, shape } = PropTypes;

export const Toolbar = (props) => {
  const { sticky, expanded, toggleNavigation } = props;

  const icon = expanded ?
    'format_indent_decrease' :
    'format_indent_increase';

  return (
    <header styleName={sticky ? 'sticky' : 'normal'}>
      <Header expanded={expanded} title='Party Rooms' />
      <Button flat ripple={false}
        neutral={false}
        icon={icon}
        onClick={toggleNavigation}
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
export const StickifiedToolbar = stickify(StyledToolbar);
export default connect(
  selector, {
    toggleNavigation: navigationActions.toggle
  }
)(StickifiedToolbar);
