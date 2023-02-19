import { ContextStore } from '.';

describe('ContextStore testing', () => {
  test('get state', () => {
    const state = {
      hello: 'World',
      another: 1,
    };
    const store = new ContextStore(state);

    expect(store.getState().hello).toBe(state.hello);
    expect(store.getState().another).toBe(state.another);
  });

  test('update', () => {
    const state = {
      hello: 'World',
      another: 1,
    };
    const store = new ContextStore(state);

    expect(store.getState().hello).toBe(state.hello);
    expect(store.getState().another).toBe(state.another);

    store.update({ hello: 'John' });

    expect(store.getState().hello).toBe('John');
    expect(store.getState().another).toBe(state.another);
  });

  test('subscription', () => {
    const state = {
      hello: 'World',
      another: 1,
    };
    const store = new ContextStore(state);

    expect(store.getState().hello).toBe(state.hello);
    expect(store.getState().another).toBe(state.another);
    store.subscribe(() => {
      expect(store.getState().hello).toBe('John');
      expect(store.getState().another).toBe(state.another);
    });

    store.update({ hello: 'John' });
  });

  test('unsubscribe', () => {
    const state = {
      hello: 'World',
      another: 1,
    };
    const store = new ContextStore(state);

    expect(store.getState().hello).toBe(state.hello);
    expect(store.getState().another).toBe(state.another);
    const unsubscribe = store.subscribe(() => {
      expect(store.getState().hello).toBe('Not unsubscribed');
      expect(store.getState().another).toBe('Not unsubscribed');
    });

    unsubscribe();
    store.update({ hello: 'John' });
    unsubscribe();
    store.update({ hello: 'Another' });
  });
});
