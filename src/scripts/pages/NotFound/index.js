import css from 'react-css-modules';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { List, ListItem } from 'react-toolbox/lib/list';

import history from 'lib/history';

import style from './style';

export const NotFound = (props) => {
  const { authenticated, pushPath } = props;
  const homePath = authenticated ? '/rooms' : '/sign-in';
  const currentYear = new Date().getFullYear();

  const linkProps = {
    leftIcon: authenticated ? 'home' : 'lock',
    caption: authenticated ? 'Return to home page' : 'Return to sign in page'
  };

  return (
    <section>
      <Helmet title='404 - Not found' />
      <div styleName='root'>
        <h1 styleName='title'>404</h1>
        <section styleName='actions'>
          <List selectable ripple>
            <ListItem
              {...linkProps}
              onClick={() => pushPath(homePath)}
            />
          </List>
        </section>
        <footer styleName='footer'>
          <p>&copy; {currentYear} PartyRooms</p>
        </footer>
      </div>
    </section>
  );
}

function select({ auth: { authenticated }}) {
  return { authenticated };
}

export default connect(select, { pushPath })(css(NotFound, style));
