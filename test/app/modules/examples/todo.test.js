import reducer, {
  initialState,
  add,
  del,
  edit,
  complete,
  completeAll,
  clearCompleted
} from 'modules/examples/todo';

describe('todo module', () => {
  it('returns initial state if its undefined', () => {
    expect(reducer(undefined, {})).to.equal(initialState);
  });

  it('adds', () => {
    const text = 'new item';
    const actual = reducer([], add(text));
    const expected = [{ id: 0, text, completed: false }];
    expect(expected).to.deep.have.members(actual);
  });

  it('deletes', () => {
    const todo1 = { id: 1, text: 'one', completed: true };
    const todo2 = { id: 2, text: 'two', completed: false };
    const stateBefore = [todo1, todo2];
    const stateAfter = reducer(stateBefore, del(todo2.id));
    expect([todo1]).to.deep.have.members(stateAfter);
  });

  it('updates', () => {
    const todo0 = { id: 0, text: 'zero', completed: false };
    const todo3 = { id: 3, text: 'three', completed: true };
    const stateBefore = [todo0, todo3];
    const stateAfter = reducer(stateBefore, edit({ id: 3, text: 'works' }));
    const expected = [
      todo0,
      { ...todo3, text: 'works' }
    ];
    expect(stateAfter).to.deep.have.members(expected);
  });

  it('toggles completed', () => {
    const todo1 = { id: 1, text: 'one', completed: false };
    const todo2 = { id: 2, text: 'three', completed: true };
    const stateBefore = [todo1, todo2];
    const stateAfter = reducer(stateBefore, complete(todo1.id));
    const expected = [
      { ...todo1, completed: true },
      todo2
    ];
    expect(stateAfter).to.deep.have.members(expected);
  });

  it('toggles completed for all', () => {
    const todo1 = { id: 1, text: 'one', completed: false };
    const todo2 = { id: 2, text: 'three', completed: true };
    const stateBefore = [todo1, todo2];

    const stateAfter1 = reducer(stateBefore, completeAll());
    const expected1 = [
      { ...todo1, completed: true },
      { ...todo2, completed: true }
    ];
    expect(stateAfter1).to.deep.have.members(expected1);

    const stateAfter2 = reducer(stateBefore, completeAll());
    const expected2 = [
      { ...todo1, completed: true },
      { ...todo2, completed: true }
    ];
    expect(stateAfter2).to.deep.have.members(expected2);
  });

  it('clears all completed', () => {
    const todo1 = { id: 1, text: 'one', completed: false };
    const todo2 = { id: 2, text: 'three', completed: true };
    const stateBefore = [todo1, todo2];
    const stateAfter = reducer(stateBefore, clearCompleted());
    const expected = [todo1];
    expect(stateAfter).to.deep.have.members(expected);
  });
});
