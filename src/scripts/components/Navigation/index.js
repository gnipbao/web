import css from 'react-css-modules';

import style from './style';
import { menus } from './config';
import Heading from './Heading';
import Menu from './Menu';

const { func, string, bool } = PropTypes;

export const Navigation = (props) => {
  const { slim, pushPath, currentPath } = props;

  return (
    <aside styleName={slim ? 'slim' : 'normal'}>
      <Heading title='Party Rooms' />
      {menus.map((menu, i) =>
        <Menu key={i}
          {...menu}
          {...{ pushPath, currentPath }}
        />
      )}
    </aside>
  );
};

Navigation.propTypes = {
  pushPath: func.isRequired,
  currentPath: string.isRequired,
  slim: bool
};

Navigation.defaultProps = {
  slim: false
};

export default css(Navigation, style);
