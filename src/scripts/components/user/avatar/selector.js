import { createStructuredSelector as selector } from 'reselect';

export default selector({
  currentUserId: s => s.auth.currentUserId
});
