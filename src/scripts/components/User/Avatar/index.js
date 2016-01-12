import css from 'react-css-modules';
import classNames from 'classnames';
import { Link } from 'react-router'

import style from './style';

const { string, bool, node } = PropTypes;

const Avatar = (props) => {
  const {
    id,
    rounded,
    small,
    big, 
    rotate,
    picture,
    nickname,
    firstName,
    children,
    ...other
  } = props;


  const shape = rounded ? 'rounded' : 'squared';
  const size = small ? 'small' : big ? 'big' : 'normal';
  const styleName = classNames(shape, size, { rotate });
  const title = nickname || firstName;

  const path = id ? `/users/${id}` : '/profile';

  return (
    <Link to={path} { ...{ ...other, styleName } }>
      {children}
      {picture ?
        <img styleName='image' src={picture} title={title || 'avatar'} /> :
        <span styleName='letter'>{title && title[0] || '?'}</span>}
    </Link>
  );
};

Avatar.propTypes = {
  rounded: bool,
  small: bool,
  big: bool,
  rotate: bool,
  children: node,
  id: string,
  picture: string,
  nickname: string,
  firstName: string
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
