import isEmpty from 'lodash/isEmpty';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import Button from 'react-toolbox/lib/button';

import * as notificationActions from 'modules/notifications/actions';
import * as selectors from 'modules/rooms/selectors';
import * as roomActions from 'modules/rooms/actions';

import { prefetch } from 'lib/fetcher';
import fetchData from 'lib/fetchData';

import Spinner from 'components/spinners/folding_cube';
import SideBar from './sidebar';
import Playlist from './playlist';
import style from './style';

const { bool, object, func } = PropTypes;

@prefetch(fetchData('rooms', roomActions.fetch))
@css(style)
export class Page extends Component {
  render() {
    return (
      <section>
        <Helmet title='Room' />
        {this.renderContent()}
      </section>
    );
  }

  renderContent() {
    if (this.props.loading) return <Spinner />;

    const { name, tracks, users, actions } = this.props;

    return (
      <div styleName='root'>
        <h1>{name}</h1>
        <Playlist tracks={tracks} />
        <SideBar users={users} />
      </div>
    );
  }
}

function selectActions(dispatch) {
  return {
    actions: {
      room: bindActionCreators(roomActions, dispatch),
      notification: bindActionCreators(notificationActions, dispatch)
    }
  };
}

export default connect(selectors.show, selectActions)(Page);
