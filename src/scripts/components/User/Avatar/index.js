import Avatar from 'react-toolbox/lib/avatar';

import style from './style';

const { string } = PropTypes;

const Ava = (props) => {
  const {
    picture,
    nickname,
    first_name,
    className,
    ...other
  } = props;

  return (
    <Avatar className={`${style.root} ${className}`}
      image={picture}
      title={picture ? null : nickname || first_name || '?'}
      {...other}
    />
  );
};

Ava.propTypes = {
  picture: string,
  nickname: string,
  first_name: string,
  className: string
};

export default Ava;
