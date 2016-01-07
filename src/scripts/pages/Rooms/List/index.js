import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import css from 'react-css-modules';
import { prefetch, defer } from 'react-fetcher';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';

import * as actions from 'modules/rooms';

import Item from './Item';
import style from './style';

const { object } = PropTypes;

@prefetch(({ dispatch }) => dispatch(actions.index()))
@css(style)
export class Page extends Component {
  componentDidMount() {
    const { index, rooms } = this.props;
    if (R.isEmpty(rooms.list)) index();
  }

  render() {
    const { rooms } = this.props;

    return (
      <section>
        <Helmet title='Rooms' />
        <h1>Rooms</h1>
        <div styleName='root'>
          {rooms.list.map((item, i) => <Item key={i} {...item} />)}
        </div>
      </section>
    );
  }
}

export default connect(s => ({
  rooms: s.rooms
}), { ...actions })(Page);
