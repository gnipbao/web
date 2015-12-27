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
        <Helmet title='Page' />
        <h1>Hey, its me, your page</h1>
        <p>Don't you remember me?</p>
      </div>
    );
  }
}

export default connect(s => s)(Page);
