import jwtDecode from 'jwt-decode';
import { session } from 'lib/auth';

export default () => {
  const authToken = session.token();
  return {
    auth: {
      authToken,
      authenticated: Boolean(authToken),
      data: authToken && jwtDecode(authToken),
    }
  };
}
