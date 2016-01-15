import css from 'react-css-modules';

import Item from './item';
import style from './style';

const { bool, func, array, string, object } = PropTypes;

export const Menu = (props) => {
  const {
    slim,
    primary,
    title,
    items
  } = props;

  return (
    <nav styleName={ primary ? 'primary' : 'normal' }>
      {!slim && title && <h4 styleName='title'>{title}</h4>}
      <ul styleName='list'>
        {items.map((item) =>
          <li key={item.path} styleName='item'>
            <Item { ...{ ...item, slim } } />
          </li>
        )}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  slim: bool.isRequired,
  primary: bool,
  title: string,
  items: array.isRequired
};

Menu.defaultProps = {
  primary: false
};

export default css(Menu, style);
