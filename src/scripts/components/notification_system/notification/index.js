import css from 'react-css-modules';
import FontIcon from 'react-toolbox/lib/font_icon';

import { TIMEOUT_DEFAULT } from 'modules/notifications';
import style from './style';

const {
  string, number, func,
  oneOf, oneOfType
} = PropTypes;

const typeIcon = {
  info: 'info_outline',
  success: 'done',
  warning: 'warning',
  error: 'error_outline'
};

@css(style)
export default class Notification extends Component {
  static propTypes = {
    id: number.isRequired,
    type: oneOf(['info', 'success', 'warning', 'error']),
    message: string.isRequired,
    title: oneOfType([string, number]),
    onClick: func,
    onDestroy: func
  };

  static defaultProps = {
    type: 'info',
    title: null,
    timeout: TIMEOUT_DEFAULT
  };

  componentDidMount() {
    if (this.props.timeout !== 0) {
      this.timer = setTimeout(this.destroy, this.props.timeout);
    }
  }

  componentWillUnmount = () => this.timer && clearTimeout(this.timer);
  destroy = () => this.props.onDestroy(this.props.id);

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    this.destroy();
  }

  render() {
    const { type, title, message } = this.props;

    return (
      <div styleName={type} onClick={::this.handleClick}>
        <FontIcon styleName='icon' value={typeIcon[type]} />
        <div styleName='content'>
          {title && <h4 styleName='title'>{title}</h4>}
          <div styleName='message'>{message}</div>
        </div>
      </div>
    );
  }
}
