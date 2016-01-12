import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import css from 'react-css-modules';

import style from './style';

const { object } = PropTypes;

@css(style)
export class Page extends Component {
  render() {
    return (
      <div>
        <Helmet title='Playlist' />
        <p>Edit this shit right now or die</p>
      </div>
    );
  }
}

function select(state, ownProps) {
  return state;
}

export default connect(select)(Page);
