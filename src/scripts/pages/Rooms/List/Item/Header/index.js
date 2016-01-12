import css from 'react-css-modules';
import { Link } from 'react-router';

import style from './style';

const { string, number } = PropTypes;

export const Header = (props) => {
  const { id, name, rating } = props;

  return (
    <div styleName='root'>
      <h5 styleName='name'>
        <Link to={`/rooms/${id}`}>{name}</Link>
      </h5>
      {parseInt(rating) !== 0 ? <div styleName='rating'>{rating.toFixed(2)}</div> : null}
    </div>
  );
};

Header.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  rating: number.isRequired
};

export default css(Header, style);
