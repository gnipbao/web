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
  get(key, defaultValue = null) {
    if (!isAvailable) return defaultValue;
    const value = localStorage.getItem(key);
    return value === null ? defaultValue : value;
  },

  set: (key, value) =>
    isAvailable && localStorage.setItem(key, value)
};
