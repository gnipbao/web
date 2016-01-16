import css from 'react-css-modules';
import { IconButton } from 'react-toolbox/lib/button';
import style from './style';

const { bool, func, object, shape } = PropTypes;

const Options = (props) => {
  const {
    repeat, shuffle,
    onToggleRepeat,
    onToggleShuffle
  } = props;

  return (
    <div styleName='root'>
      <IconButton
        icon='loop'
        accent={repeat}
        onClick={onToggleRepeat}
      />
      <IconButton
        icon='shuffle'
        accent={shuffle}
        onClick={onToggleShuffle}
      />
    </div>
  );
};

Options.propTypes = {
  repeat: bool.isRequired,
  shuffle: bool.isRequired,
  onToggleRepeat: func.isRequired,
  onToggleShuffle: func.isRequired
};

export default css(Options, style);
