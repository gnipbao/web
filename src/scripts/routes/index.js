import notFound from 'pages/NotFound';
import home from 'pages/Home';
import demo from 'pages/Demo';

// routes: name <-> segment
//  pages: segment -> path

export default {
  routes: [
    { name: 'home', path: '/' },
    { name: 'demo', path: '/demo' }
  ],
  pages: {
    home,
    demo,
    notFound
  },
  defaultRoute: 'home'
};
