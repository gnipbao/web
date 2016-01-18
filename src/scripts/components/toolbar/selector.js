import { createStructuredSelector as selector } from 'reselect';

export default selector({
  expanded: s => s.navigation.expanded
});
