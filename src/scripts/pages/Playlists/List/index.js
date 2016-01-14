import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch } from 'react-fetcher';

import { List } from 'react-toolbox/lib/list';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import fetchData from 'lib/fetchData';
import * as actions from 'modules/playlists';
import { list as selector } from 'selectors/playlists';

import Item from './Item';
import style from './style';

const { func, bool, array } = PropTypes;

@prefetch(fetchData('playlists', actions.list))
@css(style)
export class Page extends Component {
  static propTypes = {
    list: func.isRequired,
    loading: bool.isRequired,
    collection: array
  };

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

export default connect(selector, actions)(Page);
