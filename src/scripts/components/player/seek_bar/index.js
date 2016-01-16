import css from 'react-css-modules';

import style from './style';

const { bool, func, object, shape } = PropTypes;

export const SeekBar = (props) => {
  const { offset, duration, onSeek } = props;
  const width = offset / duration * 100;

  return (
    <div styleName='root'>
      <div styleName='wrap'>
        <div styleName='seek-bar'>
          <div styleName='progress' style={{ width: `${width}%` }}>
            <div styleName='handle'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default css(SeekBar, style);
