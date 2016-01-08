import css from 'react-css-modules';
import { Link } from 'react-router'

import style from './style';

const { number } = PropTypes;

export const Stats = (props) => {
  const {
    rooms_count,
    playlists_count,
    tracks_count
  } = props;

  return (
    <ul styleName='root'>
      <li>
        <span styleName='value'>{rooms_count}</span>
        <span styleName='label'>rooms</span>
      </li>
      <li>
        <span styleName='value'>{playlists_count}</span>
        <span styleName='label'>playlists</span>
      </li>
      <li>
        <span styleName='value'>{tracks_count}</span>
        <span styleName='label'>tracks</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  rooms_count: number.isRequired,
  playlists_count: number.isRequired,
  tracks_count: number.isRequired
};

export default css(Stats, style);
