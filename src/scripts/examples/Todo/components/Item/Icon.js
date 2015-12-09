import FontIcon from 'react-toolbox/lib/font_icon';
import style from 'react-toolbox/lib/list/style';

const Icon = ({ name }) => (
  <FontIcon
    className={`${style.icon} ${style.left}`}
    value={name}
  />
);

Icon.propTypes = {
  icon: PropTypes.string
};

export default Icon;
