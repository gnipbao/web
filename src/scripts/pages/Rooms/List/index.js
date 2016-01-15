import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import css from 'react-css-modules';
import { prefetch } from 'react-fetcher';

import ProgressBar from 'react-toolbox/lib/progress_bar';

import fetchData from 'lib/fetchData';
import { actions, filters } from 'modules/rooms';
import { list as selector } from 'selectors/rooms';

import Filter from './filter';
import Item from './item';
import style from './style';

const { bool, string, array, func, oneOf, shape } = PropTypes;

@prefetch(fetchData('rooms', actions.list))
@css(style)
export class Page extends Component {
  static propTypes = {
    filter: oneOf(Object.keys(filters)).isRequired,
    loading: bool.isRequired,
    collection: array,

    actions: shape({
      list: func.isRequired,
      filter: func.isRequired
    }).isRequired
  };

  render() {
    const { filter, actions } = this.props;

    return (
      <section>
        <Helmet title='Rooms' />
        <h1>Rooms</h1>
        <Filter value={filter} onChange={actions.filter} />
        <div styleName='root'>
          {this.renderContent()}
        </div>
      </section>
    );
  }

  renderContent() {
    const { loading, collection } = this.props;

    if (loading) return <ProgressBar />;
    if (isEmpty(collection)) return null;

    return collection.map(item => <Item key={item.id} { ...item } />);
  }
}

function selectActions(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(selector, selectActions)(Page);
