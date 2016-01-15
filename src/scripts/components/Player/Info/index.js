import css from 'react-css-modules';
import { Link } from 'react-router'; 

import style from './style';

const { bool, string, func, object, shape } = PropTypes;

function formatTitle(title) {
  if (!title) return '';

  const arr = title.replace('–', '-').split(' - ');
  return arr[arr.length - 1].split(' (')[0];
}

export const Info = (props) => {
  const { id, title, artist } = props;
  const formattedTitle = formatTitle(title);

  return (
    <div styleName='root'>
      <Link styleName='title' to={`/tracks/${id}`}>{formatTitle}</Link>
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
