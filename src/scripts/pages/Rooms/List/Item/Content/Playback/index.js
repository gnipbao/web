import css from 'react-css-modules';

import style from './style';

const { number, object } = PropTypes;

export const Playback = (props) => {
  const { track: { title, artist } } = props;
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
