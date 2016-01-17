import css from 'react-css-modules';
import { connect } from 'react-redux';

import Sticky from 'react-sticky';
import createMenus from './createMenus';
import User from './user';
import Menu from './menu';

import style from './style';

const { func, string, number, object, bool } = PropTypes;


export const Navigation = (props) => {
  const { currentUser, slim, logout } = props;
  const menus = createMenus(props);

  const stickyStyle = {
    position: 'fixed',
    top: '60px',
    width: slim ? '60px' : '200px'
  };

  return (
    <section className={slim ? style.slim : style.normal}>
      <Sticky stickyStyle={stickyStyle}
        topOffset={120}
        type={React.DOM.aside}>
        {menus.map((menu) => <Menu key={menu.title} {...{ ...menu, slim } } />)}
        <User {...{ slim, currentUser, logout } }/>
      </Sticky>
    </section>
  );
};

Navigation.propTypes = {
  logout: func.isRequired,
  currentUser: object.isRequired,
  roomsCount: number.isRequired,
  playlistsCount: number.isRequired,
  slim: bool
};

Navigation.defaultProps = {
  slim: false
};

function select(state) {
  const {
    auth: { currentUser },
    navigation: { slim },
    rooms,
    playlists
  } = state;

  return {
    slim,
    currentUser,
    roomsCount: rooms.ids.length,
    playlistsCount: playlists.ids.length,
  };
}

export default connect(select)(css(Navigation, style));
