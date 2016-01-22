import { autobind } from 'core-decorators';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import { Tabs, Tab } from 'react-toolbox/lib/tabs';

import { prefetch } from 'lib/fetcher';
import fetchData from './fetchData';

import * as userActions from 'modules/users/actions';
import * as profileActions from 'modules/profile/actions';
import * as selectors from 'modules/profile/selectors';

import Spinner from 'components/spinners/folding_cube';
import Info from 'components/user/info';
import Activity from './activity';
import Favorites from './favorites';

import style from './style';

const { object } = PropTypes;

@prefetch(fetchData)
@css(style)
export class Page extends Component {
  state = { tabIndex: 1 };

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.fetch(nextProps);
    }
  }

  fetch(props = this.props) {
    const {
      fetchUser, fetchProfile,
      params, loading, data
    } = props;

    if (isEmpty(data) && !loading) {
      return params && params.id ?
        fetchUser(params.id) :
        fetchProfile();
    }
  }

  @autobind
  handleTabChange(tabIndex) {
    this.setState({ tabIndex });
  }

  handleActive() {
  }

  render() {
    const { loading, data } = this.props;

    if (loading) return <Spinner />;
    if (isEmpty(data)) return null;

    return this.renderContent(data);
  }

  renderContent(data) {
    const { firstName, lastName } = data;

    return (
      <section>
        <Helmet title={`${firstName} ${lastName}`} />
        <div styleName='root'>
          <Info { ...data } />
          <Tabs styleName='tabs'
            index={this.state.tabIndex}
            onChange={this.handleTabChange}>
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

const actions = {
  fetchUser: userActions.fetch,
  fetchProfile: profileActions.fetch
};

export default connect(selectors.show, actions)(Page);
