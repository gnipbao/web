import isEmpty from 'lodash/isEmpty';
import { bindActionCreators } from 'redux';
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

import Track from './track';
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
    loading: bool,
    collection: array,
    playerActions: object.isRequired,
    trackActions: object.isRequired
  };

  hasMore = () => Boolean(
    this.props.links &&
    this.props.links.next
  );

  render() {
    const { params, pageCount, loading, trackActions } = this.props;

    return (
      <section>
        <Helmet title='Tracks' />
        <h1>Tracks</h1>
        <InfiniteScroll styleName='root'
          enabled={this.hasMore()}
          loading={loading}
          spinner={() => <Spinner />}
          load={() => trackActions.list(params.id, pageCount + 1)}>
          {this.renderContent()}
        </InfiniteScroll>
      </section>
    );
  }

  renderContent() {
    const {
      collection,
      player,
      playerActions,
      trackActions
    } = this.props;

    if (isEmpty(collection)) return null;

    const trackProps = {
      player,
      playerActions,
      trackActions
    };

    return (
      <ul styleName='list'>
        {collection.map(track =>
          <Track key={track.id}
            track={track} { ...trackProps }
          />)
        }
      </ul>
    );
  }
}

function selectActions(dispatch) {
  return {
    playerActions: bindActionCreators(playerActions, dispatch),
    trackActions: bindActionCreators(playlistActions.tracks, dispatch)
  };
}

export default connect(selectors.list, selectActions)(Page);
