import { action } from 'lib/redux';
import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import { reducer as form } from 'redux-form';
import recycle from 'redux-recycle';

export const RESET = 'RESET';
export const reset = action(RESET);

const pattern = /^\.\/((?!index)[a-z]+)\.js$/i;

const appReducers = require.context('./', false, /^\.\/((?!index)[a-z]+)\.js$/i);
const vendorReducers = {
  routing,
  form
};

// HACK: have to use '.default' because of babel 6
// and the way I export my reducers with redux-act.
// It exports default under key 'default'
// despite the fact I'm using babel-plugin-add-module-exports

const reducers = appReducers.keys().reduce((acc, key) => {
  const name = pattern.exec(key)[1];
  const reducer = appReducers(key);

  // see https://github.com/omnidan/redux-recycle 
  // this HO reducer gives an ability to easily reset state
  // without page reloading, e.g. when user logs out
  // or switches to another account
  acc[name] = recycle(reducer.default || reducer, [RESET]);
  return acc;
}, vendorReducers);


export default combineReducers(reducers);
