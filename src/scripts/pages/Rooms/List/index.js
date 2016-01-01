import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import css from 'react-css-modules';

import style from './style';

const { object } = PropTypes;

@css(style)
export class Page extends Component {
  render() {
    const { picture, first_name, last_name } = this.props.auth.data.user;
    return (
      <div>
        <Helmet title='Page' />
        <img src={picture} />
      </div>
    );
  }
}

export default connect(s => s)(Page);
