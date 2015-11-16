import notFound from 'pages/NotFound';
import home from 'pages/Home';
import demo from 'pages/Demo';
import animation from 'pages/Animation';

// routes: name <-> segment
//  pages: segment -> path

export default {
  routes: [
    { name: 'home', path: '/' },
    { name: 'demo', path: '/demo' },
    { name: 'animation', path: '/animation' }
  ],
  pages: {
    notFound,
    home,
    demo,
    animation
  },
  defaultRoute: 'home'
};
