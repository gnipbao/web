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

@prefetch(({ dispatch }) => dispatch(actions.index()))
@css(style)
export class Page extends Component {
  state = { tabIndex: 1 };

  componentDidMount() {
    const { index, profile: { data } } = this.props;
    if (isEmpty(data)) index();
  }

  handleTabChange(tabIndex) {
    this.setState({ tabIndex });
  }

  handleActive() {
  }

  render() {
    const { profile } = this.props;
    const { loading, error, data } = profile;

    if (loading) return <ProgressBar />;
    if (!isEmpty(data)) return this.renderData(data);

    return null;
  }

  renderData(data) {
    const { first_name, last_name } = data;

    return (
      <section>
        <Helmet title={`${first_name} ${last_name}`} />
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

export default connect(s => ({
  profile: s.profile
}), { ...actions })(Page);
