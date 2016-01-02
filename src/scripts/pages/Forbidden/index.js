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
        <Helmet title='Forbidden' />
        <h1>You can't access this page</h1>
        <p>Go away</p>
      </div>
    );
  }
}

export default connect(s => s)(Page);
