import { autobind } from 'core-decorators';
import css from 'react-css-modules';
import { connect } from 'react-redux';

import FontIcon from 'react-toolbox/lib/font_icon';
import { Tabs, Tab } from 'react-toolbox/lib/tabs';

import stickify from 'components/stickify';
import Chat from './chat';
import Members from './members';
import Settings from './settings';
import style from './style';

const { bool, string, object, number } = PropTypes;

@css(style)
export class SideBar extends Component {
  state = { tabIndex: 1 };

  @autobind
  handleTabChange(tabIndex) {
    this.setState({ tabIndex });
  }

  handleActive() {
  }

  render() {
    const { users, sticky } = this.props;

    return (
      <aside styleName={sticky ? 'sticky' : 'normal'}>
        <div styleName='sidebar'>
          <Tabs styleName='tabs'
            index={this.state.tabIndex}
            onChange={this.handleTabChange}>

            <Tab label={<FontIcon value='chat' />}><Chat /></Tab>
            <Tab label={<FontIcon value='people_outline' />}><Members users={users} /></Tab>
            <Tab label={<FontIcon value='settings' />} disabled><Settings /></Tab>
          </Tabs>
        </div>
      </aside>
    );
  }
}

export const StyledSideBar = css(SideBar, style);
export const StickifiedSideBar = stickify(StyledSideBar, 120);

export default StickifiedSideBar;
