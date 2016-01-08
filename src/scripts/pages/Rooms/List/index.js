import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch, defer } from 'react-fetcher';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import * as actions from 'modules/rooms';

import Item from './Item';
import style from './style';

const { object } = PropTypes;

@prefetch(({ dispatch }) => dispatch(actions.index()))
@css(style)
export class Page extends Component {
  componentDidMount() {
    const { index, rooms } = this.props;
    if (isEmpty(rooms.list)) index();
  }

  render() {
    const { rooms } = this.props;
    const { loading, error, list } = rooms;

    if (loading) return <ProgressBar />;

    return (
      <section>
        <Helmet title='Rooms' />
        <h1>Rooms</h1>
        <div styleName='root'>
          {rooms.list.map(item => <Item key={item.id} {...item} />)}
        </div>
      </section>
    );
  }
}

export default connect(s => ({
  rooms: s.rooms
}), { ...actions })(Page);
