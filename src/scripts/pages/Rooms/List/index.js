import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import css from 'react-css-modules';
import { prefetch } from 'react-fetcher';

import fetchData from 'lib/fetchData';
import { actions, filters } from 'modules/rooms';
import { list as selector } from 'selectors/rooms';

import InfiniteScroll from 'components/infinite_scroll';
import Spinner from 'components/spinners/folding_cube';
import Filter from './filter';
import Item from './item';
import style from './style';

const {
  bool, string, number, object,
  array, func, oneOf, shape
} = PropTypes;

@prefetch(fetchData('rooms', actions.list))
@css(style)
export class Page extends Component {
  static propTypes = {
    filter: oneOf(Object.keys(filters)).isRequired,
    pageCount: number.isRequired,
    links: object,
    loading: bool.isRequired,
    collection: array,

    actions: shape({
      list: func.isRequired,
      filter: func.isRequired
    }).isRequired
  };

  hasMore = () => Boolean(
    this.props.links &&
    this.props.links.next
  );

  render() {
    const { filter, loading, actions } = this.props;

    return (
      <section>
        <Helmet title='Rooms' />
        <h1>Rooms</h1>
        <Filter value={filter} onChange={actions.filter} />
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
    return this.props.collection.map(item => <Item key={item.id} { ...item } />);
  }
}

function selectActions(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(selector, selectActions)(Page);
