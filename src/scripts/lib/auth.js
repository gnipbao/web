import cookie from 'react-cookie';

export const session = {
  KEY: 'authToken',
  EXPIRATION: new Date().getTime() + settings.session.ttl,

  signIn(authToken) {
    this.authToken = authToken;
    cookie.save(this.KEY, authToken, {
      expires: new Date(this.EXPIRATION)
    });
  },

  signOut() {
    cookie.remove(this.KEY);
    this.authToken = null;
  },

  token() {
    if (!this.authToken) {
      this.authToken = cookie.load(this.KEY) || null;
    }
    return this.authToken;
  },

  isAuthenticated() {
    return !!this.token();
  }
};
