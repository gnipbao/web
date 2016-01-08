import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import { prefetch, defer } from 'react-fetcher';

import { List } from 'react-toolbox/lib/list';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import * as playlists from 'modules/playlists';

import Item from './Item';
import style from './style';

const { object } = PropTypes;

@prefetch(({ dispatch }) => dispatch(playlists.index()))
@css(style)
export class Page extends Component {
  componentDidMount() {
    const { index, playlists } = this.props;
    if (isEmpty(playlists.entities)) index();
  }

  render() {
    const { playlists } = this.props;
    const { loading, error, entities } = playlists;

    if (loading) return <ProgressBar />;

    if (!isEmpty(entities)) {
      const items = Object.values(entities.index);

      return (
        <section>
          <Helmet title='Playlists' />
          <h1>Playlists</h1>
          <div styleName='root'>
            <List selectable ripple>
              {items.map(item => <Item key={item.id} {...item} />)}
            </List>
          </div>
        </section>
      );
    }

    return null;
  }
}

export default connect(s => ({
  playlists: s.playlists
}), { ...playlists })(Page);
