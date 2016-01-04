import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import css from 'react-css-modules';

import { prefetch, defer } from 'react-fetcher';

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
    const { index, playlists } = this.props;

    return (
      <div styleName='root'>
        <Helmet title='Playlists' />
        <Item key={123} title='1111' />
        <Item key={222} title='2222' />
        <Item key={333} title='333' />
        <Item key={4} title='44' />
        <Item key={5} title='5555555' />
      </div>
    );
  }
}

export default connect(s => ({
  playlists: s.playlists
}), { ...playlists })(Page);
