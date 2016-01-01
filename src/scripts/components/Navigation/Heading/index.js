import css from 'react-css-modules';
import SVG from 'svg-inline-react';

import style from './style';
import logo from './logo.png';

const { string } = PropTypes;

export const Heading = ({ title }) => (
  <div styleName='root'>
    <img styleName='logo' src={logo} />
    <h1 styleName='title'>{title}</h1>
  </div>
);

Heading.propTypes = {
  title: string.isRequired
};

export default css(Heading, style);
