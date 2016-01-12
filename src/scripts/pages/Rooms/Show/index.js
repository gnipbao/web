import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch, defer } from 'react-fetcher';

import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import * as actions from 'modules/rooms';

import style from './style';

const { object } = PropTypes;

@prefetch(({ dispatch, params: { id } }) => dispatch(actions.load(id)))
@css(style)
export class Page extends Component {
  componentDidMount() {
    const { load, entities, rooms, params } = this.props;

    if (params &&  params.id && !entities.rooms[params.id] && !rooms.loading) load(params.id);
  }

  render() {
    const {
      params: { id },
      rooms: { loading },
      entities: { rooms }
    } = this.props;

    if (loading) return <ProgressBar />;
    if (id && rooms[id]) return this.renderRoom(rooms[id]);

    return null;
  }

  renderRoom(room) {
    const { name } = room;

    return (
      <section>
        <Helmet title='Room' />
        <div styleName='root'>
          <h1>Hey, its me, your room {name}</h1>
          <p>Don't you remember me?</p>
        </div>
      </section>
    );
  }
}

export default connect(
  ({ rooms, entities }) => ({ rooms, entities }),
  actions
)(Page);
