import css from 'react-css-modules';

import createMenus from './createMenus';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

import style from './style';

const { func, string, object, bool } = PropTypes;

export const Navigation = (props) => {
  const { user, slim, logout } = props;
  const menus = createMenus(props);

  return (
    <aside styleName={slim ? 'slim' : 'normal'}>
      <Header slim={slim} title='Party Rooms' />
      {menus.map((menu) => <Menu key={menu.title} {...{ ...menu, slim } } />)}
      <Footer {...{ slim, user, logout } }/>
    </aside>
  );
};

Navigation.propTypes = {
  logout: func.isRequired,
  user: object.isRequired,
  slim: bool
};

Navigation.defaultProps = {
  slim: false
};

export default css(Navigation, style);
