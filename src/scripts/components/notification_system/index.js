import pick from 'lodash/pick';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Notification from './notification';
import { destroy } from 'modules/notifications';

import style from './style';

const { number, array, func } = PropTypes;

export class NotificationSystem extends Component {
  static propTypes = {
    source: array.isRequired,
    destroy: func.isRequired,
    enterTimeout: number,
    leaveTimeout: number
  };

  static defaultProps = {
    enterTimeout: 400,
    leaveTimeout: 400
  };

  render() {
    const {
      source, destroy,
      enterTimeout,
      leaveTimeout
    } = this.props;

    const transitionNames = [
      'enter', 'enterActive',
      'leave', 'leaveActive'
    ];

    return (
      <div className={style.root}>
        <CSSTransitionGroup
          transitionName={pick(style, ...transitionNames)}
          transitionEnterTimeout={enterTimeout}
          transitionLeaveTimeout={leaveTimeout}>
          {source.map(item =>
            <Notification key={item.id}
              {...item} onDestroy={destroy} />)
          }
        </CSSTransitionGroup>
      </div>
    );
  };
};

export default connect(
  s => ({ source: s.notifications }),
  { destroy }
)(NotificationSystem);
