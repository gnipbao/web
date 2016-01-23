import css from 'react-css-modules';

import { ListItem } from 'react-toolbox/lib/list';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';

const TooltipButton = Tooltip(Button);

import format from 'lib/utils/format';
import style from './style';

@css(style)
export default class Item extends Component {
  render() {
    const { id, title, artist, player } = this.props;
    const current = id === player.track;

    const leftIcon = current ?
      'equalizer' : 'music_note';

    const rightIcon = current && player.playing ?
      'pause_circle_outline' :
      'play_circle_outline';

    const handleClick = current ?
      () => player.togglePlay() :
      () => player.changeTrack(id);

    return (
      <ListItem
        styleName={current ? 'on' : 'off'}
        selectable
        caption={format(title)}
        legend={artist}
        onClick={handleClick}
        { ...{ leftIcon, rightIcon } }>
      </ListItem>
    );
  }
}
