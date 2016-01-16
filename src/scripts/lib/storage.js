const isAvailable = function(){
  let test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch(e) {
    return false;
  }
}();

export default {
  get: (key, defaultValue = null) =>
    (isAvailable && localStorage.getItem(key) || defaultValue),

  set: (key, value) =>
    isAvailable && localStorage.setItem(key, value)
};
