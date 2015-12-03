export default class Resolver {
  firstRender = true;
  pendingActions = [];

  resolve(action, ...args) {
    if (!__SERVER__ && !this.firstRender) {
      return action(args);
    }

    this.pendingActions = [
      ...this.pendingActions,
      { action, args }
    ];
  }
j
  clean() {
  }

  async dispatch() {
    this.pendingActions.forEach(
      { action, args } => await action(...args)
    );
  }
}
