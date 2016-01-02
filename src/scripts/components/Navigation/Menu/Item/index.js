import css from 'react-css-modules';
import FontIcon from 'react-toolbox/lib/font_icon';

import style from './style';

const { bool, string, number, func } = PropTypes;

export const Item = (props) => {
  const { active, onClick, label, icon, count, styleName, ...anchor } = props;
  return (
    <a styleName={active ? 'active' : 'normal' }
      {...{ ...anchor, onClick } }>
      {icon ? <FontIcon className={style.icon} value={icon} /> : null}
      {label ? <abbr styleName='label'>{label}</abbr> : null}
      {count && parseInt(count) !== 0 ? <small styleName='count'>{count}</small> : null}
    </a>
  );
};

Item.propTypes = {
  label: string.isRequired,
  active: bool.isRequired,
  icon: string,
  count: number,
  onClick: func,
  styleName: string
};

Item.defaultProps = {
  icon: 'extension',
  styleName: ''
};

export default css(Item, style);
