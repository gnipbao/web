import isEmpty from 'lodash/lang/isEmpty';
import zip from 'lodash/array/zip';

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

@prefetch(({ dispatch }) => dispatch(actions.list()))
@css(style)
export class Page extends Component {
  componentDidMount() {
    const { list, rooms, loading } = this.props;
    if (isEmpty(rooms) && !loading) list();
  }

  render() {
    const { rooms, loading, entities } = this.props;

    if (isEmpty(rooms) || loading) {
      return <ProgressBar />;
    }

    return (
      <section>
        <Helmet title='Rooms' />
        <h1>Rooms</h1>
        <div styleName='root'>
          {rooms.map(item => <Item key={item.id} { ...{ ...item, entities } } />)}
        </div>
      </section>
    );
  }
}

function select(state) {
  const { rooms, entities } = state;

  return { entities, ...rooms,
    rooms: rooms.ids.map(r => entities.rooms[r])
  };
}

export default connect(select, actions)(Page);
