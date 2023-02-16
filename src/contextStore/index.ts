export class ContextStore<T> {
  private subscriptions: (() => void)[] = [];

  private state: T;

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState = () => {
    return this.state;
  };

  update = (partialNewState: Partial<T>) => {
    this.state = { ...this.state, ...partialNewState };

    this.subscriptions.forEach((cb) => {
      cb();
    });
  };

  subscribe = (cb: () => void) => {
    this.subscriptions.push(cb);

    return () => {
      const index = this.subscriptions.indexOf(cb);

      if (index === -1) {
        return;
      }

      this.subscriptions.splice(index, 1);
    };
  };
}
