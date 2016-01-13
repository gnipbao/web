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

const { object, bool, array, func } = PropTypes;

function fetchData({ dispatch }) {
  return dispatch(actions.list());
}

@prefetch(fetchData)
@css(style)
export class Page extends Component {
  static propTypes = {
    list: func.isRequired,
    loading: bool.isRequired,
    collection: array
  };

  componentWillMount() {
    const { list, loading, collection } = this.props;
    if (isEmpty(collection) && !loading) list();
  }

  render() {
    const { loading, collection } = this.props;

    if (loading || isEmpty(collection)) {
      return <ProgressBar />;
    }

    return (
      <section>
        <Helmet title='Rooms' />
        <h1>Rooms</h1>
        <div styleName='root'>
          {collection.map(item => <Item key={item.id} { ...item } />)}
        </div>
      </section>
    );
  }
}

function select(state) {
  const { rooms, entities } = state;

  return {
    ...rooms,
    collection: rooms.ids.map(id => entities.rooms[id])
  };
}

export default connect(select, actions)(Page);
