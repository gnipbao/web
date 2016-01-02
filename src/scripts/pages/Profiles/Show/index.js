import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import css from 'react-css-modules';

import style from './style';

const { object } = PropTypes;

@css(style)
export class Page extends Component {
  render() {
    const { picture, first_name, last_name, role } = this.props.auth.data.user;
    const name = `${first_name} ${last_name}`;
    return (
      <div>
        <Helmet title={name} />
        <img src={picture} />
        <dl>
          <dt>{name}</dt>
          <dt>{role}</dt>
        </dl>
      </div>
    );
  }
}

export default connect(s => s)(Page);
