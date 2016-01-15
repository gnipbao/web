export default {
  get: (key, defaultValue = null) =>
    (localStorage && localStorage.getItem(key) || defaultValue),

  set: (key, value) =>
    localStorage && localStorage.setItem(key, value)
};
