// helper method for throttling events
// that can fire at a high rate

export default (type, name, obj) => {
  const target = obj || window;
  let running = false;
  target.addEventListener(type, () => {
    if (running) return;
    running = true;
    requestAnimationFrame(() => {
      target.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  });
};
