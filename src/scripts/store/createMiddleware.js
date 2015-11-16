import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { router5Middleware } from 'redux-router5';
import { applyMiddleware } from 'redux';

export default (router) => applyMiddleware(
  router5Middleware(router),
  thunk,
  promise
);
