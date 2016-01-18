import pick from 'lodash/pick';
import css from 'react-css-modules';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import style from './style';

const { number, object } = PropTypes;

export const Playback = (props) => {
  const { offset, track: { title, artist } } = props;
  const label = `${title} by ${artist}`;

  return (
    <CSSTransitionGroup styleName='root' component='dev'
      transitionName={pick(style, ['appear', 'appearActive'])}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionAppearTimeout={500}>
      <span>{label}</span>
    </CSSTransitionGroup>
  );
};

Playback.propTypes = {
  offset: number.isRequired,
  track: object.isRequired
};

export default css(Playback, style);
