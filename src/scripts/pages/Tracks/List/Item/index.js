import css from 'react-css-modules';

import { ListItem } from 'react-toolbox/lib/list';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';

const TooltipButton = Tooltip(Button);

import { strip } from 'lib/utils/format';
import style from './style';

@css(style)
export default class Item extends Component {
  render() {
    const { id, title, artist, current, onPlay } = this.props;

    return (
      <ListItem
        styleName='root'
        selectable
        disabled={current}
        caption={strip(title)}
        legent={artist}
        leftIcon='music_note'
        rightIcon='play_circle_outline'
        onClick={() => onPlay(id)}>
      </ListItem>
    );
  }
}
