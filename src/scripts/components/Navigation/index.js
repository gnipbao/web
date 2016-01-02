import css from 'react-css-modules';

import createMenus from './createMenus';
import Heading from './Heading';
import Footer from './Footer';
import Menu from './Menu';

import style from './style';

const { func, string, object, bool } = PropTypes;

export const Navigation = (props) => {
  const { user, slim, pushPath, logout, currentPath } = props;
  const menus = createMenus(user);

  return (
    <aside styleName={slim ? 'slim' : 'normal'}>
      <Heading title='Party Rooms' />
      {menus.map((menu, i) =>
        <Menu key={i}
          {...menu}
          {...{ pushPath, currentPath } }
        />
      )}
      <Footer {...{ user, pushPath, logout } }/>
    </aside>
  );
};

Navigation.propTypes = {
  pushPath: func.isRequired,
  logout: func.isRequired,
  currentPath: string.isRequired,
  user: object.isRequired,
  slim: bool,
};

Navigation.defaultProps = {
  slim: false
};

export default css(Navigation, style);
