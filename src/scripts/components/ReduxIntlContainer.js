import { compose } from 'redux';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

export default compose(
  connect(
    s => ({
      ...s.locale,
      key: s.locale.locale,
    })
  )
)(IntlProvider);
