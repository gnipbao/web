import isArray from 'lodash/isArray';
import mergeWith from 'lodash/mergewith'
import merge from 'lodash/merge'

// merge strategy should depend on action type:
//
// 1) create
// 2) fetch/list
// 3) update
// 4) destroy

function mergeStrategy(objValue, srcValue) {
  if (isArray(objValue)) {
    return srcValue;
  }
}

export default (...sources) => mergeWith({}, ...sources, mergeStrategy);
