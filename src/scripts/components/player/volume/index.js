import css from 'react-css-modules';
import { IconButton } from 'react-toolbox/lib/button';

import style from './style';

const { bool, func, object, shape } = PropTypes;

@css(style)
export class Volume extends Component {
  state = {
    expanded: false
  };

  handleToggle() {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
  }

  handleChange(e) {
    const boundingRect = this.percentage.getBoundingClientRect();
    const value = (e.clientY - boundingRect.top) / this.percentage.offsetHeight;
    this.props.onVolumeChange(1 - value);
  }

  render() {
    const { volume, muted, onVolumeChange } = this.props;
    const { expanded } = this.state;

    const silent = muted || volume === 0;
    const toggleIcon = silent ? 'volume_off' :
      volume > 0.5 ? 'volume_up' : 'volume_down';

    const percentage = volume * 100;
    const style = { top: (100 - percentage) + '%' };

    return (
      <div styleName='root'>
        <IconButton styleName='toggle'
          neutral={false}
          icon={toggleIcon}
          onClick={::this.handleToggle}
        />
        <div styleName={ expanded ? 'expanded' : 'collapsed' }>
          <IconButton styleName='max'
            neutral={false}
            icon='volume_up'
            onClick={() => onVolumeChange(1)}
          />
          <div styleName='percentage'
            ref={r => this.percentage = r}
            onClick={::this.handleChange}>
            <div styleName='value' style={style}></div>
          </div>
          <IconButton styleName='min'
            neutral={false}
            icon='volume_off'
            onClick={() => onVolumeChange(0)}
          />
        </div>
      </div>
    );
  }
};

export default Volume;
