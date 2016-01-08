import css from 'react-css-modules';
import classNames from 'classnames';

import style from './style';

const { string, bool, node } = PropTypes;

const Avatar = (props) => {
  const {
    rounded,
    small,
    big, 
    rotate,
    picture,
    nickname,
    first_name,
    children,
    ...other
  } = props;


  const shape = rounded ? 'rounded' : 'squared';
  const size = small ? 'small' : big ? 'big' : 'normal';
  const styleName = classNames(shape, size, { rotate });
  const title = nickname || first_name;

  return (
    <div { ...{ ...other, styleName } }>
      {children}
      {picture ?
        <img styleName='image' src={picture} title={title || 'avatar'} /> :
        <span styleName='letter'>{title && title[0] || '?'}</span>}
    </div>
  );
};

Avatar.propTypes = {
  rounded: bool,
  small: bool,
  big: bool,
  rotate: bool,
  children: node,
  picture: string,
  nickname: string,
  first_name: string
};

Avatar.defaultProps = {
  rounded: false,
  small: false,
  big: false,
  rotate: false
};

export default css(Avatar, style, {
  allowMultiple: true
});
