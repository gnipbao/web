import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import { prefetch, defer } from 'react-fetcher';

import { Tabs, Tab } from 'react-toolbox/lib/tabs';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const TooltipButton = Tooltip(Button);

import { load as loadProfile } from 'modules/profile';
import { load as loadUser } from 'modules/users';

import Info from 'components/User/Info';
import Activity from './Activity';
import Favorites from './Favorites';

import style from './style';

const { object } = PropTypes;

function loadSubject({ dispatch, params }) {
  return dispatch(
    params && params.id ?
      loadUser(params.id) :
      loadProfile()
  )
}

@prefetch(loadSubject)
@css(style)
export class Page extends Component {
  state = { tabIndex: 1 };

  componentDidMount() {
    const {
      loadUser, loadProfile,
      params, entities, profile, users
    } = this.props;

    if (params && params.id && !entities.users[params.id] && !users.loading) {
      loadUser(params.id);
    } else if (profile && !profile.id && !profile.loading) {
      loadProfile();
    }
  }

  handleTabChange(tabIndex) {
    this.setState({ tabIndex });
  }

  handleActive() {
  }

  render() {
    const { entities: { users } } = this.props;
    const { loading, id } = this.getParams();

    if (loading) return <ProgressBar />;
    if (id && users[id]) return this.renderUser(users[id]);

    return null;
  }

  getParams() {
    const { params, profile, users } = this.props;

    if (params && params.id) {
      return { id: params.id, loading: users.loading };
    } else {
      return { ...profile };
    }
  }

  renderUser(user) {
    const { firstName, lastName } = user;

    return (
      <section>
        <Helmet title={`${firstName} ${lastName}`} />
        <div styleName='root'>
          <Info { ...user} />
          <Tabs styleName='tabs'
            index={this.state.tabIndex}
            onChange={::this.handleTabChange}>
            <Tab label='Activity'><Activity /></Tab>
            <Tab label='Favorites' onActive={this.handleActive}><Favorites /></Tab>
            <Tab label='Invites'><p>Nothing to see here...</p></Tab>
            <Tab label='Identities'><p>Nothing to see here...</p></Tab>
          </Tabs>
        </div>
      </section>
    );
  }
}

export default connect(({
  profile,
  users,
  entities
}) => ({
  profile,
  users,
  entities
}), {
  loadUser,
  loadProfile
})(Page);
