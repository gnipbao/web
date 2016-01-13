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

const { func, bool, array } = PropTypes;

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
    const { list, loading, collection} = this.props;
    if (isEmpty(collection) && !loading) list();
  }

  render() {
    const { loading, collection } = this.props;

    if (isEmpty(collection) || loading) {
      return <ProgressBar />;
    }

    return (
      <section>
        <Helmet title='Playlists' />
        <h1>Playlists</h1>
        <div styleName='root'>
          <List selectable ripple>
            {collection.map(item => <Item key={item.id} {...item} />)}
          </List>
        </div>
      </section>
    );
  }
}

function select(state) {
  const { playlists, entities } = state;

  return {
    ...playlists,
    collection: playlists.ids.map(id => entities.playlists[id])
  };
}

export default connect(select, actions)(Page);
