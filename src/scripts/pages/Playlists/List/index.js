import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import css from 'react-css-modules';

import { prefetch, defer } from 'react-fetcher';

import { List } from 'react-toolbox/lib/list';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';

import * as playlists from 'modules/playlists';

import Item from './Item';
import style from './style';

const { object } = PropTypes;

@prefetch(({ dispatch }) => dispatch(playlists.index()))
@css(style)
export class Page extends Component {
  componentDidMount() {
    const { index, playlists } = this.props;
    if (R.isEmpty(playlists.list)) index();
  }

  render() {
    const { playlists } = this.props;

    return (
      <section>
        <Helmet title='Playlists' />
        <h1>Playlists</h1>
        <div styleName='root'>
          <List selectable ripple>
            {playlists.list.map((item, i) => <Item key={i} {...item} />)}
          </List>
        </div>
      </section>
    );
  }
}

export default connect(s => ({
  playlists: s.playlists
}), { ...playlists })(Page);
