// TODO: this is not going to work since we are universal now

export const session = {
  signIn(user) {
    this.user = user;
    // localStorage.setItem('currentUser', JSON.stringify(user));
  },

  signOut() {
    this.user = null;
    // localStorage.removeItem('currentUser');
  },

  currentUser() {
    // const user = localStorage.getItem('currentUser');
    // return this.user && JSON.parse(this.user);
    return this.user;
  },

  isAuthenticated() {
    return !!this.currentUser();
  }
};
