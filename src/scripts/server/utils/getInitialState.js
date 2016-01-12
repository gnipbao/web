import jwtDecode from 'jwt-decode';
import session from 'lib/session';

export default function() {
  const token = session.token();

  return {
    auth: {
      token,
      authenticated: Boolean(token),
      data: token && jwtDecode(token),
    }
  };
}
