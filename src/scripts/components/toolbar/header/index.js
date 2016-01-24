import css from 'react-css-modules';
import SVG from 'svg-inline-react';
import { Link } from 'react-router';

import style from './style';
import logo from './logo';

const { string, bool } = PropTypes;

export const Header = ({ title, expanded }) => (
  <Link to='/' styleName={ expanded ? 'expanded' : 'collapsed' }>
    <SVG src={logo} />
    <h1 styleName='title'>{title}</h1>
  </Link>
);

Header.propTypes = {
  expanded: bool.isRequired,
  title: string.isRequired
};

export default css(Header, style);
