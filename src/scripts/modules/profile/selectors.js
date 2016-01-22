import { createSelector as selector } from 'reselect';

export const show = selector(
  s => s.users,
  s => s.profile,
  s => s.entities.users,
  (s, { params }) => params && params.id,
  (users, profile, source, id) => {
    const data = source[id || profile.id];
    return id ?
      { id, loading: users.loading, data } :
      { ...profile, data };
  }
);
