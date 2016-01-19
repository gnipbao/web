import css from 'react-css-modules';
import { connect } from 'react-redux';

import { Card } from 'react-toolbox/lib/card';

import Header from './header';
import Footer from './footer';
import Content from './content';

import selector from './selector';
import style from './style';

const { array, object, number, string, bool, func } = PropTypes;

export const Item = (props) => {
  const { id, name, rating, inside, ...content } = props;

  return (
    <div styleName='root'>
      <Card styleName='card'>
        <Header { ...{ id, name, rating } } />
        <Content { ...content } />
        <Footer { ...{ id } } canEnter={!inside} />
      </Card>
    </div>
  );
};

Item.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  rating: number,
  inside: bool.isRequired
};

export default connect(selector)(css(Item, style));
