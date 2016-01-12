import isEmpty from 'lodash/lang/isEmpty';
import { bindActionCreators } from 'redux'
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

function fetchData({ dispatch, params }) {
  return params && params.id ?
    dispatch(loadUser(params.id)) :
    dispatch(loadProfile());
}

@prefetch(fetchData)
@css(style)
export class Page extends Component {
  state = { tabIndex: 1 };

  componentWillMount() {
    this.load();
  }

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

    if (isEmpty(data) || loading) {
      return <ProgressBar />;
    }

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

function select(state, ownProps) {
  const { profile, users, entities } = state;
  const { params } = ownProps;

  if (params && params.id) {
    return {
      id: params.id,
      loading: users.loading,
      data: entities.users[params.id]
    };
  }

  return {
    ...profile,
    data: entities.users[profile.id]
  };
}

export default connect(select, { loadUser, loadProfile })(Page);
