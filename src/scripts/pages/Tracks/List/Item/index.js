import css from 'react-css-modules';

import { ListItem } from 'react-toolbox/lib/list';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';

const TooltipButton = Tooltip(Button);

import style from './style';

@css(style)
export default class Item extends Component {
  state = { playing: false };

  togglePlayback() {
    const { playing } = this.state;
    const audio = ReactDOM.findDOMNode(this.refs.audio);

    if (!playing) {
      audio.play();
    } else {
      audio.pause();
    }
    this.setState({ playing: !playing });
  }

  render() {
    const { title, artist, url } = this.props;
    const { playing } = this.state;

    return (
      <ListItem
        styleName='root'
        caption={title}
        legent={artist}
        leftIcon='music_note'
        rightIcon='play_circle_outline'
        onClick={::this.togglePlayback}>

        <audio ref='audio' src={url} />

      </ListItem>
    );
  }
}
