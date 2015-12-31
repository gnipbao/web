import cookie from 'react-cookie';

export const session = {
  KEY: 'authToken',
  EXPIRATION: new Date().getTime() + settings.session.ttl,

  signIn(authToken) {
    cookie.save(this.KEY, authToken, {
      expires: new Date(this.EXPIRATION)
    });
    return authToken;
  },

  signOut() {
    cookie.remove(this.KEY);
  },

  token() {
    return cookie.load(this.KEY) || null;
  },

  authenticated() {
    return !!this.token();
  }
};
