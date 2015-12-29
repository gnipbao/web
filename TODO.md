- [ ] take a look at https://github.com/mxstbr/react-boilerplate
- [ ] try https://github.com/khankuan/react-tourist and https://github.com/usablica/intro.js for an interactive tour / guide
- [ ] keep looking at https://github.com/rackt/redux-simple-router/issues/122 "attempted" apparently will work when its fixed
- [ ] replace isomorphic-fetch with [bjax](https://github.com/gitterHQ/bjax)
- [ ] property lookup doesn't work https://github.com/jonathantneal/precss/issues/47
- [x] fix custom media extensions (see cssnext.js), is the problem related to incorrect cssnext options
- [ ] read https://medium.com/swlh/you-might-not-need-gulp-js-89a0220487dd#.rz9wwh10i
- [ ] add newrelic browser timings support https://github.com/newrelic/node-newrelic#browser-timings-rum--real-user-monitoring
- [ ] try to use webpack externals + provider plugin at the same time for things like isomorphic-fetch
- [x] try to speed up tests using: webpack -> mocha + jsdom + enzyme, no fucking browsers, no karma
- [ ] wait for enzyme to become good enough to remove THE SHIT from my webpack config
- [ ] take a look [at this](https://github.com/rstacruz/mocha-jsdom)
- [x] fix docker workflow (fuck it)
- [ ] watch [this](https://github.com/pgte/nock/issues/150)
- [ ] wait for any progress [on this](https://github.com/pgte/nock/issues/409)
- [ ] try https://github.com/mdlawson/piping
- [ ] integrate with https://github.com/Snyk/snyk
- [ ] think about hydrate on client option
- [ ] wait for stylelint v3, [try this again](https://github.com/stylelint/stylelint/issues/523)
- [x] fix phantomjs issue when running tests in docker container (fuck it)

```
web_1 | 12:30:29 PM test.1 |  18 11 2015 12:30:29.884:ERROR [phantomjs.launcher]: /usr/src/app/node_modules/phantomjs/lib/phantom/bin/phantomjs: 4: /usr/src/app/node_modules/phantomjs/lib/phantom/bin/phantomjs: Syntax error: Unterminated quoted string
```

- [x] wait for [font magician pr](https://github.com/jonathantneal/postcss-font-magician/pull/7) and switch to original packet
- [ ] wait for [the font magician fix](https://github.com/jonathantneal/postcss-font-magician/issues/9)
- [ ] wait for [isparta fix](https://github.com/douglasduteil/isparta/issues/81) before upgrading to babel 6)
- [x] wait for [babel-plugin-react-transform fix](https://github.com/gaearon/babel-plugin-react-transform/issues/46) and move to babel 6
- [ ] wait for html-webpack-plugin release & replace package source
- [ ] wait for babel 6 fixes & update it
- [ ] I don't have to specify mime types everywhere, see common loaders.js, fix this
- [ ] update readme: directory layout
- [ ] wait for [PR](https://github.com/acdlite/redux-batched-updates/pull/3) & update redux-batched-updates
- [ ] try to get rid of stage & optional keys in js loader query
- [ ] remove run-sequence & use gulp 4.x `series` function instead
