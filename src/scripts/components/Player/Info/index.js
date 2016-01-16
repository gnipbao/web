import css from 'react-css-modules';
import { Link } from 'react-router'; 

import { formatTitle } from 'lib/utils/format';
import style from './style';

const { bool, string, func, object, shape } = PropTypes;

export const Info = (props) => {
  const { id, title, artist } = props;

  return (
    <div styleName='root'>
      <Link styleName='title' to={`/tracks/${id}`}>{formatTitle(title)}</Link>
      <Link styleName='artist' to='http://google.com'>{artist}</Link>
    </div>
  );
};

Info.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  artist: string.isRequired
};

export default css(Info, style);
