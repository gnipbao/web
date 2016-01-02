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
        <Helmet title='Edit playlist' />
        <p>Edit this shit right now or die</p>
      </div>
    );
  }
}

export default connect(s => s)(Page);
