import css from 'react-css-modules';
import { Link } from 'react-router';
import { ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import FontIcon from 'react-toolbox/lib/font_icon';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

const TooltipButton = Tooltip(Button);

import format from 'lib/utils/format';
import style from './style';

const { bool, string, object, number } = PropTypes;

export const Track = ({ track }) => {
  const {
    id, title, artist,
    isCurrent
  } = track;

  return (
    <ListItem styleName='track'
      caption={title}
      legend={artist}
      leftIcon='music_note'
      />
  );
};

Track.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  artist: string.isRequired
};

export default css(Track, style);
