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

export function get(key, defaultValue = null) {
  if (!isAvailable) return defaultValue;

  const value = localStorage.getItem(key);
  return value === null ? defaultValue : JSON.parse(value);
}

export function set(key, value) {
  return isAvailable && localStorage.setItem(key, JSON.stringify(value));
}
