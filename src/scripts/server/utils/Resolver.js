// Double-render approach
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

  clean() {
    this.firstRender = true;
    this.pendingActions = [];
  }

  async dispatch() {
    for (const { action, args } of this.pendingActions) {
      await action(...args);
    }
  }
}
