import css from 'react-css-modules';

import style from './style';

const { string, number } = PropTypes;

export const Header = ({ name, rating }) => {
  return (
    <div styleName='root'>
      <h5 styleName='name'>{name}</h5>
      {parseInt(rating) !== 0 ? <div styleName='rating'>{rating.toFixed(2)}</div> : null}
    </div>
  );
};

Header.propTypes = {
  name: string.isRequired,
  rating: number.isRequired
};

export default css(Header, style);
