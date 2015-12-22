export default {
  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  },

  currentUser() {
    const user = localStorage.getItem('currentUser');
    return user && JSON.parse(user);
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  getToken() {
    return localStorage.getItem('token');
  }
};
