import css from 'react-css-modules';
import { connect } from 'react-redux';

import createMenus from './createMenus';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

import style from './style';

const { func, string, number, object, bool } = PropTypes;

export const Navigation = (props) => {
  const { currentUser, slim, logout } = props;
  const menus = createMenus(props);

  return (
    <aside styleName={slim ? 'slim' : 'normal'}>
      <Header slim={slim} title='Party Rooms' />
      {menus.map((menu) => <Menu key={menu.title} {...{ ...menu, slim } } />)}
      <Footer {...{ slim, currentUser, logout } }/>
    </aside>
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
