import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import css from 'react-css-modules';

import style from './style';

const { object } = PropTypes;

@css(style)
export class Page extends Component {
  render() {
    return (
      <section>
        <Helmet title='Forbidden' />
        <div styleName='root'>
          <h1>You can't access this page</h1>
          <p>Go away</p>
        </div>
      </section>
    );
  }
}

export default connect(s => s)(Page);
