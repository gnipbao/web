import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import { prefetch, defer } from 'react-fetcher';

import { Tabs, Tab } from 'react-toolbox/lib/tabs';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const TooltipButton = Tooltip(Button);

import * as actions from 'modules/profile';

import Info from 'components/User/Info';
import Activity from './Activity';
import Favorites from './Favorites';

import style from './style';

const { object } = PropTypes;

@prefetch(({ dispatch }) => dispatch(actions.load()))
@css(style)
export class Page extends Component {
  state = { tabIndex: 1 };

  componentDidMount() {
    const { load, users, profile: { id } } = this.props;
    if (!id) load();
  }

  handleTabChange(tabIndex) {
    this.setState({ tabIndex });
  }

  handleActive() {
  }

  render() {
    const { profile, users } = this.props;
    const { loading, error, id } = profile;

    if (loading) return <ProgressBar />;
    if (id && users[id]) return this.renderUser(users[id]);

    return null;
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

export default connect(s => ({
  profile: s.profile,
  users: s.entities.users
}), actions)(Page);
