import jwtDecode from 'jwt-decode';
import session from 'lib/session';

const unauthState = {
  data: null,
  currentUser: null,
  currentUserId: null
};

function getAuthData(token) {
  if (!token) return unauthState;

  const data = jwtDecode(token);

  return {
    data,
    currentUser: data.user,
    currentUserId: data.sub
  };
}

export default function() {
  const token = session.token();
  const authData = getAuthData(token);

  return {
    auth: {
      token,
      authenticated: Boolean(token),
      ...authData
    }
  };
}
