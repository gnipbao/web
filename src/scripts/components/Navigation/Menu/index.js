import css from 'react-css-modules';

import Item from './Item';
import style from './style';

const { bool, func, array, string, object } = PropTypes;
const isActive = (current, path) => current === path;

export const Menu = (props) => {
  const {
    primary,
    title,
    items,
    pushPath,
    currentPath
  } = props;

  const list = items.map(({ path, ...item }) => ({
    onClick: () => currentPath !== path && pushPath(path),
    active: isActive(currentPath, path),
    ...item
  }));

  return (
    <nav styleName={ primary ? 'primary' : 'normal'}>
      {title && <h4 styleName='title'>{title}</h4>}
      <ul styleName='list'>
        {list.map((item, i) =>
          <li key={i} styleName='item'>
            <Item {...item } />
          </li>
        )}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  items: array.isRequired,
  title: string,
  primary: bool,
};

Menu.defaultProps = {
  primary: false
};

export default css(Menu, style);
