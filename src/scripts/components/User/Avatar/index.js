import css from 'react-css-modules';
import classNames from 'classnames';

import style from './style';

const { string, bool, node } = PropTypes;

const Ava = (props) => {
  const {
    floating,

    small,
    normal,
    big,

    picture,
    nickname,
    first_name,

    children,

    ...other
  } = props;


  const shape = floating ? 'floating' : 'squared';
  const styleName = classNames(shape, { small, normal, big });
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

Ava.propTypes = {
  floating: bool,
  small: bool,
  normal: bool,
  big: bool,

  children: node,

  picture: string,
  nickname: string,
  first_name: string
};

Ava.defaultProps = {
  floating: false,
  small: false,
  normal: true,
  big: false
};

export default css(Ava, style, {
  allowMultiple: true
});
