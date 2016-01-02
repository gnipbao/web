import jwtDecode from 'jwt-decode';
import session from 'lib/session';

export default function() {
  const authToken = session.token();

  return {
    auth: {
      authToken,
      authenticated: Boolean(authToken),
      data: authToken && jwtDecode(authToken),
    }
  };
}
