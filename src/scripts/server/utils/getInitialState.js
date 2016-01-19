import jwtDecode from 'jwt-decode';
import * as session from 'lib/session';
import isMobile from 'ismobilejs';

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

export default function (req) {
  const mobile = isMobile(req.headers['user-agent']).any;
  const token = session.token();
  const authData = getAuthData(token);

  return {
    environment: {
      mobile
    },
    auth: {
      token,
      authenticated: Boolean(token),
      ...authData
    }
  };
}
