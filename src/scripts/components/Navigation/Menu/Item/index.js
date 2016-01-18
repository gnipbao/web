import css from 'react-css-modules';
import { Link } from 'react-router';
import FontIcon from 'react-toolbox/lib/font_icon';

import style from './style';

const { bool, string, number, func } = PropTypes;

export const Item = (props) => {
  const {
    path,
    label,
    expanded,
    icon,
    count,
    ...linkProps
  } = props;

  return (
    <Link styleName={expanded ? 'expanded' : 'collapsed'}
      activeClassName={style.active} to={path} {...linkProps}>
      {icon ? <FontIcon styleName='icon' value={icon} /> : null}
      {label ? <abbr styleName='label'>{label}</abbr> : null}
      {count && parseInt(count) !== 0 ? <small styleName='count'>{count}</small> : null}
    </Link>
  );
};

Item.propTypes = {
  path: string.isRequired,
  label: string.isRequired,
  expanded: bool.isRequired,
  icon: string,
  count: number
};

Item.defaultProps = {
  icon: 'extension'
};

export default css(Item, style);
