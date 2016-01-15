import css from 'react-css-modules';

import Time from './time';
import SeekBar from './seek_bar';

import style from './style';

const { bool, func, object, shape } = PropTypes;

export const Controls = (props) => {
  const { offset, duration } = props;
  const timingProps = { offset, duration };

  return (
    <div styleName='root'>
      <SeekBar {...timingProps} />
      <Time {...timingProps} />
    </div>
  );
};

export default css(Controls, style);
