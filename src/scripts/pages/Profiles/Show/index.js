import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import { prefetch } from 'react-fetcher';

import { Tabs, Tab } from 'react-toolbox/lib/tabs';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import fetchData from './fetchData';
import { load as loadProfile } from 'modules/profile';
import { load as loadUser } from 'modules/users';
import { show as selector } from 'selectors/profile';

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
      this.load(nextProps);
    }
  }

  load(props = this.props) {
    const {
      loadUser, loadProfile,
      params, loading, data
    } = props;

    if (isEmpty(data) && !loading) {
      return params && params.id ?
        loadUser(params.id) :
        loadProfile();
    }
  }

  handleTabChange(tabIndex) {
    this.setState({ tabIndex });
  }

  handleActive() {
  }

  render() {
    const { loading, data } = this.props;

    if (loading) return <ProgressBar />;
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

const actions = {
  loadUser,
  loadProfile
};

export default connect(selector, actions)(Page);
