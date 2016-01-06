import ToolboxLink from 'react-toolbox/lib/link';
import style from './style';

const { func, string } = PropTypes;

export const Link = (props) => {
  const { path, pushPath, className, ...other } = props;

  return (
    <ToolboxLink {...other}
      className={`${style.root} ${className}`}
      onClick={() => pushPath(path)}
    />
  );
};

Link.propTypes = {
  pushPath: func.isRequired,
  path: string.isRequired,
  className: string
};

export default Link;
