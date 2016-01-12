import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch, defer } from 'react-fetcher';

import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import * as actions from 'modules/rooms';

import style from './style';

const { object } = PropTypes;

function fetchData({ dispatch, params }) {
  return dispatch(actions.load(params.id));
}

@prefetch(fetchData)
@css(style)
export class Page extends Component {
  componentWillMount() {
    const { load, loading, data, params } = this.props;
    if (isEmpty(data) && !loading) load(params.id);
  }

  render() {
    const { loading, data } = this.props;

    if (isEmpty(data) || loading) {
      return <ProgressBar />;
    }

    return this.renderContent(data);
  }

  renderContent(data) {
    const { name } = data;

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

function select(state, ownProps) {
  const { params: { id } } = ownProps;
  const { entities, rooms } = state;

  return {
    ...rooms,
    data: entities.rooms[id]
  };
}

export default connect(select, actions)(Page);
