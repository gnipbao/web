import { createElement } from 'react';

import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

import { pages } from 'routes';

const Page = (props) => {
  const { route } = props;

  const segment = route ? route.name.split('.')[0] : undefined;
  const page = pages[segment] || pages.notFound;

  return createElement(page, props);
};

export default connect(routeNodeSelector(''))(Page);
