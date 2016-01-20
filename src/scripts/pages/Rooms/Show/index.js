import isEmpty from 'lodash/isEmpty';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch } from 'react-fetcher';

import Button from 'react-toolbox/lib/button';

import Spinner from 'components/spinners/folding_cube';

import * as notificationActions from 'modules/notifications';
import { actions as roomActions } from 'modules/rooms';

import * as selectors from 'selectors/rooms';
import fetchData from 'lib/fetchData';

import Members from './Members';
import Playlist from './Playlist';
import style from './style';

const { bool, object, func } = PropTypes;

@prefetch(fetchData('rooms', roomActions.fetch))
@css(style)
export class Page extends Component {
  render() {
    return (
      <section>
        <Helmet title='Room' />
        <div styleName='root'>
          {this.renderContent()}
        </div>
      </section>
    );
  }

  renderContent() {
    if (this.props.loading) return <Spinner />;

    const { name, tracks, users, actions } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <Playlist tracks={tracks} />
        <Members users={users} />
        <Button onClick={() => actions.notification.create('error', 'this is zaebis when music4ka ka4aet', 'here is my title, its very very long', 2000)} label='ebash' />
      </div>
    );
  }
}

export default connect(selectors.show, d => ({
  actions: {
    room: bindActionCreators(roomActions, d),
    notification: bindActionCreators(notificationActions, d)
  }
}))(Page);
