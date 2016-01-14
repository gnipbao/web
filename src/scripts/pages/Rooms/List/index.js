import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch } from 'react-fetcher';

import ProgressBar from 'react-toolbox/lib/progress_bar';

import fetchData from 'lib/fetchData';
import * as actions from 'modules/rooms';
import { list as selector } from 'selectors/rooms';

import Item from './Item';
import style from './style';

const { bool, array, func } = PropTypes;

@prefetch(fetchData('rooms', actions.list))
@css(style)
export class Page extends Component {
  static propTypes = {
    list: func.isRequired,
    loading: bool.isRequired,
    collection: array
  };

  render() {
    const { loading, collection } = this.props;

    if (loading) return <ProgressBar />;
    if (isEmpty(collection)) return null;

    return (
      <section>
        <Helmet title='Rooms' />
        <h1>Rooms</h1>
        <div styleName='root'>
          {collection.map(item => <Item key={item.id} { ...item } />)}
        </div>
      </section>
    );
  }
}

export default connect(selector, actions)(Page);
