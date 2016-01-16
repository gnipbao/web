import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch } from 'react-fetcher';

import { List } from 'react-toolbox/lib/list';

import InfiniteScroll from 'components/infinite_scroll';
import Spinner from 'components/spinners/folding_cube';

import fetchData from './fetchData';
import { list as selector } from 'selectors/tracks';
import { tracks as actions } from 'modules/playlists';
import { changeTrack } from 'modules/player';

import Item from './item';
import style from './style';

const {
  object, number, bool,
  string, array, func, shape
} = PropTypes;

@prefetch(fetchData)
@css(style)
export class Page extends Component {
  static propTypes = {
    params: object.isRequired,
    pageCount: number.isRequired,
    links: object,
    list: func.isRequired,
    loading: bool,
    collection: array
  };

  hasMore = () => Boolean(
    this.props.links &&
    this.props.links.next
  );

  render() {
    const { params, pageCount, loading, list } = this.props;

    return (
      <section>
        <Helmet title='Tracks' />
        <h1>Tracks</h1>
        <InfiniteScroll styleName='root'
          enabled={this.hasMore()}
          loading={loading}
          spinner={() => <Spinner />}
          load={() => list(params.id, pageCount + 1)}>
          {this.renderContent()}
        </InfiniteScroll>
      </section>
    );
  }

  renderContent() {
    if (isEmpty(this.props.collection)) return null;

    return (
      <List selectable ripple>
        {this.props.collection.map(
          item => <Item key={item.id}
            onPlay={this.props.changeTrack} { ...item } />
        )}
      </List>
    );
  }
}

export default connect(selector, { ...actions, changeTrack })(Page);
