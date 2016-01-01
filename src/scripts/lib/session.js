import cookie from 'react-cookie';

export default {
  AUTH_KEY: 'authToken',
  AUTH_EXPIRATION: new Date().getTime() + settings.session.ttl,

  LOCALE_KEY: 'locale',

  signIn(authToken) {
    cookie.save(this.AUTH_KEY, authToken, {
      expires: new Date(this.AUTH_EXPIRATION)
    });
    return authToken;
  },

  signOut() {
    cookie.remove(this.AUTH_KEY);
  },

  token() {
    return cookie.load(this.AUTH_KEY) || null;
  },

  authenticated() {
    return !!this.token();
  },

  setLocale(locale) {
    cookie.set(this.LOCALE_KEY, locale, { path: '/' });
  }
};
