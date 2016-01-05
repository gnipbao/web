import css from 'react-css-modules';

import createMenus from './createMenus';
import Heading from './Heading';
import Footer from './Footer';
import Menu from './Menu';

import style from './style';

const { func, string, object, bool } = PropTypes;

export const Navigation = (props) => {
  const { user, slim, pushPath, logout, currentPath } = props;
  const menus = createMenus(props);

  return (
    <aside styleName={slim ? 'slim' : 'normal'}>
      <Heading slim={slim} title='Party Rooms' />
      {menus.map((menu, i) =>
        <Menu key={i}
          {...menu}
          {...{ slim, pushPath, currentPath } }
        />
      )}
      <Footer {...{ slim, user, pushPath, logout } }/>
    </aside>
  );
};

Navigation.propTypes = {
  pushPath: func.isRequired,
  logout: func.isRequired,
  currentPath: string.isRequired,
  user: object.isRequired,
  playlists: object.isRequired,
  rooms: object.isRequired,
  slim: bool
};

Navigation.defaultProps = {
  slim: false
};

export default css(Navigation, style);
