import CSS from 'react-css-modules';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { List, ListItem } from 'react-toolbox/lib/list';

import history from 'lib/history';

import style from './style';

export const NotFound = (props) => {
  const { authenticated, currentPath, pushPath } = props;
  const homePath = authenticated ? '/' : '/sign-in';
  const currentYear = new Date().getFullYear();

  return (
    <div styleName='root'>
      <Helmet title='404 - Not found' />
      <h1 styleName='title'>404</h1>
      <section styleName='actions'>
        <List selectable ripple>
          <ListItem
            caption='Go to home page'
            leftIcon='home'
            onClick={() => pushPath(homePath)}
          />
        </List>
      </section>
      <footer styleName='footer'>
        <p>&copy; {currentYear} PartyRooms</p>
      </footer>
    </div>
  );
}

export default connect(
  s => ({
    authenticated: Boolean(s.auth.authToken),
    currentPath: s.routing.path
  }),
  { pushPath }
)(CSS(NotFound, style));
