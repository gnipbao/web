import padLeft from 'lodash.padleft';
import css from 'react-css-modules';

import style from './style';

const { bool, func, object, shape } = PropTypes;

function formatSeconds(time) {
  const minutes = padLeft(Math.floor(time / 60), 2, 0);
  const seconds = padLeft(time % 60, 2, 0);

  return `${minutes}:${seconds}`;
}

export const Time = (props) => {
  const offset = formatSeconds(props.offset);
  const duration = formatSeconds(props.duration);

  const formatedValue = `${offset} / ${duration}`;

  return <span styleName='time'>{formatedValue}</span>;
};

export default css(Time, style);
