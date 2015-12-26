import { session } from 'lib/auth';

export default (nextState, replaceState) => {
  if (!session.authenticated()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/sign-in');
  }
}
