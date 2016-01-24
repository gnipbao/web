import css from 'react-css-modules';

import Info from './info';
import Controls from './controls';
import style from './style';

@css(style)
export default class Item extends Component {
  render() {
    const { track, player, actions } = this.props;
    const current = track.id === player.track;

    const togglePlayback = current ?
      () => player.togglePlay() :
      () => player.changeTrack(track.id);

    const componentProps = { 
      playing: player.playing,
      track,
      current,
      togglePlayback,
      ...actions
    };

    return (
      <div styleName='track'>
        <Info { ...componentProps } />
        <Controls { ...componentProps } />
      </div>
    );
  }
}
