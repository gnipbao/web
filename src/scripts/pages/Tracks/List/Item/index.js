import css from 'react-css-modules';

import { ListItem } from 'react-toolbox/lib/list';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';

const TooltipButton = Tooltip(Button);

import style from './style';

@css(style)
export default class Item extends Component {
  render() {
    const { id, title, artist, onPlay } = this.props;

    return (
      <ListItem
        styleName='root'
        caption={title}
        legent={artist}
        leftIcon='music_note'
        rightIcon='play_circle_outline'
        onClick={() => onPlay(id)}>
      </ListItem>
    );
  }
}
