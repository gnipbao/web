import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import { List } from 'react-toolbox/lib/list';

import InfiniteScroll from 'components/infinite_scroll';
import Spinner from 'components/spinners/folding_cube';

import { prefetch } from 'lib/fetcher';
import fetchData from 'lib/fetchData';

import * as actions from 'modules/playlists/actions';
import * as selectors from 'modules/playlists/selectors';

import Item from './item';
import style from './style';

const { object, func, number, bool, array } = PropTypes;

@prefetch(fetchData('playlists', actions.list))
@css(style)
export class Page extends Component {
  static propTypes = {
    pageCount: number.isRequired,
    links: object,
    list: func.isRequired,
    loading: bool.isRequired,
    collection: array
  };

  hasMore = () => Boolean(
    this.props.links &&
    this.props.links.next
  );

  render() {
    const { pageCount, loading, collection } = this.props;

    if (isEmpty(collection)) return null;

    return (
      <section>
        <Helmet title='Playlists' />
        <h1>Playlists</h1>
        <InfiniteScroll styleName='root'
          enabled={this.hasMore()}
          loading={loading}
          spinner={() => <Spinner />}
          load={() => list(pageCount + 1)}>
          <List selectable ripple>
            {collection.map(item => <Item key={item.id} {...item} />)}
          </List>
        </InfiniteScroll>
      </section>
    );
  }
}

export default connect(selectors.list, actions)(Page);
