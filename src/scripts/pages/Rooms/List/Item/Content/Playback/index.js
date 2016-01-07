import css from 'react-css-modules';

import style from './style';

const { number, object } = PropTypes;

export const Playback = (props) => {
  const { offset, track: { title, artist } } = props;

  return (
    <ul styleName='root'>
      <li styleName='title'>{title}</li>
      <li styleName='artist'>{artist}</li>
    </ul>
  );
};

Playback.propTypes = {
  offset: number.isRequired,
  track: object.isRequired
};

export default css(Playback, style);
