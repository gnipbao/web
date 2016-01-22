import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import { List } from 'react-toolbox/lib/list';

import InfiniteScroll from 'components/infinite_scroll';
import Spinner from 'components/spinners/folding_cube';

import { prefetch } from 'lib/fetcher';
import fetchData from './fetchData';

import * as playlistActions from 'modules/playlists/actions';
import * as playerActions from 'modules/player/actions';
import * as selectors from 'modules/tracks/selectors';

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
    const {
      collection,
      player,
      changeTrack,
      togglePlay
    } = this.props;

    const playerProps = {
      ...player,
      changeTrack,
      togglePlay
    };

    if (isEmpty(collection)) return null;

    return (
      <List selectable ripple>
        {collection.map(
          item => <Item key={item.id}
            { ...{ ...item, player: playerProps } } />
        )}
      </List>
    );
  }
}

export default connect(selectors.list, {
  ...playlistActions.tracks,
  ...playerActions
})(Page);
