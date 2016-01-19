import pick from 'lodash/pick';
import css from 'react-css-modules';

import style from './style';

const { number, object } = PropTypes;

export const Playback = (props) => {
  const { offset, track: { title, artist } } = props;
  const label = `${title} by ${artist}`;

  return (
    <div styleName='root'>{label}</div>
  );
};

Playback.propTypes = {
  offset: number.isRequired,
  track: object.isRequired
};

export default css(Playback, style);
