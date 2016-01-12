import css from 'react-css-modules';

import { Card } from 'react-toolbox/lib/card';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import style from './style';

const { array, object, bool, func } = PropTypes;

export const Item = (props) => {
  const { id, name, rating, ...contentProps } = props;

  return (
    <div styleName='root'>
      <Card styleName='card'>
        <Header { ...{ id, name, rating } } />
        <Content { ...contentProps } />
        <Footer { ...{ id } } />
      </Card>
    </div>
  );
};

export default css(Item, style);
