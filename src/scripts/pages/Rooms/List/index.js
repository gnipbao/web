import isEmpty from 'lodash/lang/isEmpty';
import zip from 'lodash/array/zip';

import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch, defer } from 'react-fetcher';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import * as actions from 'modules/rooms';

import Item from './Item';
import style from './style';

const { object } = PropTypes;

@prefetch(({ dispatch }) => dispatch(actions.list()))
@css(style)
export class Page extends Component {
  componentDidMount() {
    const { list, domain: { entities: { rooms } } } = this.props;
    if (isEmpty(rooms)) list();
  }

  render() {
    const { domain: { entities: { rooms, users } } } = this.props;

    if (!isEmpty(rooms)) {
      const items = Object.values(rooms);

      return (
        <section>
          <Helmet title='Rooms' />
          <h1>Rooms</h1>
          <div styleName='root'>
            {items.map(item => <Item key={item.id} {...item} />)}
          </div>
        </section>
      );
    }

    return <ProgressBar />;
  }
}

export default connect(s => s, { ...actions })(Page);
