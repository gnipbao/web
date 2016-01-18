import { createSelector as selector } from 'reselect';

export default selector(
  (_, { owner }) => owner,
  s => s.entities.users,
  (owner, users) => ({ owner: users[owner] })
);
