import React from 'react';
import ReactDOM from 'react-dom';

import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';

import { Provider } from 'react-redux';

import { createRouter } from 'router';
import { createStore } from 'store';

import { routes, defaultRoute } from 'routes';

import Counter from 'components/Counter';

const router = createRouter(routes, { defaultRoute });

describe('Counter', () => {
  const mockStore = {};

  const store = createStore(router);
  const renderer = renderIntoDocument(
    <Provider store={store} key='provider'>
      <Counter />
    </Provider>
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it ('renders correclty', () => {
    return expect(renderer).to.be.ok;
  });

  it ('has correct class name', () => {
  });
});
