import css from 'react-css-modules';
import { Link } from 'react-router';

import { strip } from 'lib/utils/format';
import style from './style';

const { bool, string, object, shape } = PropTypes;

export const Info = (props) => {
  const { id, title, artist } = props;

  return (
    <div styleName='info'>
      <Link styleName='title' to={`/tracks/${id}`}>{strip(title)}</Link>
      <Link styleName='artist' to='http://google.com'>{strip(artist)}</Link>
    </div>
  );
};

Info.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  artist: string.isRequired
};

export default css(Info, style);
