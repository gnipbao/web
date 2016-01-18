import css from 'react-css-modules';
import { connect } from 'react-redux';

import stickify from 'components/stickify';
import selector from './selector';
import createMenus from './createMenus';
import User from './user';
import Menu from './menu';
import style from './style';

const {
  string, number, bool,
  object, func
} = PropTypes;

export const Navigation = (props) => {
  const {
    expanded, sticky,
    currentUser, logout
  } = props;

  const menus = createMenus(props);

  return (
    <aside styleName={expanded ? 'expanded' : 'collapsed'}>
      <div styleName={sticky ? 'sticky' : 'normal'}>
        {menus.map((menu) => <Menu key={menu.title} {...{ ...menu, expanded } } />)}
        <User {...{ expanded, currentUser, logout } }/>
      </div>
    </aside>
  );
};

Navigation.propTypes = {
  logout: func.isRequired,
  currentUser: object.isRequired,
  roomsCount: number.isRequired,
  playlistsCount: number.isRequired,
  expanded: bool
};

Navigation.defaultProps = {
  expanded: true
};

export const StyledNavigation = css(Navigation, style, { allowMultiple: true });
export const StickifiedNavigation = stickify(StyledNavigation, 300);
export default connect(selector)(StickifiedNavigation);
