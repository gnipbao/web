import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch, defer } from 'react-fetcher';

import { List } from 'react-toolbox/lib/list';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import * as actions from 'modules/playlists';

import Item from './Item';
import style from './style';

const { object, bool, array, func } = PropTypes;

function fetchData({ dispatch, params }) {
  return dispatch(actions.tracks.list(params.id));
}

@prefetch(fetchData)
@css(style)
export class Page extends Component {
  static propTypes = {
    list: func.isRequired,
    params: object.isRequired,
    loading: bool,
    collection: array
  };

  componentWillMount() {
    const { list, loading, collection, params } = this.props;
    if (isEmpty(collection) && !loading) list(params.id);
  }

  render() {
    const { loading, collection } = this.props;

    if (loading) return <ProgressBar />;

    if (!isEmpty(collection)) {
      return (
        <section>
          <Helmet title='Tracks' />
          <h1>Tracks</h1>
          <div styleName='root'>
            <List selectable ripple>
              {collection.map(item => <Item key={item.id} { ...item } />)}
            </List>
          </div>
        </section>
      );
    }
  }
}

function select(state, ownProps) {
  const { params } = ownProps;
  const { playlists, entities } = state;

  const tracks = playlists.tracks[params.id];
  const collection = tracks && tracks.ids.map(id => entities.tracks[id])

  return {
    ...tracks,
    collection
  };
}

export default connect(
  select, { list: actions.tracks.list }
)(Page);
