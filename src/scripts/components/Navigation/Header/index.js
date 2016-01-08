import css from 'react-css-modules';
import SVG from 'svg-inline-react';

import style from './style';
import logo from './logo';

const { string, bool } = PropTypes;

export const Header = ({ title, slim }) => (
  <div styleName={ slim ? 'slim' : 'normal' }>
    <SVG src={logo} /><h1 styleName='title'>{title}</h1>
  </div>
);

Header.propTypes = {
  slim: bool.isRequired,
  title: string.isRequired
};

export default css(Header, style);
