- [ ] wait for stylelint v3, [try this again](https://github.com/stylelint/stylelint/issues/523)
- [ ] fix phantomjs issue when running tests in docker container:

```
web_1 | 12:30:29 PM test.1 |  18 11 2015 12:30:29.884:ERROR [phantomjs.launcher]: /usr/src/app/node_modules/phantomjs/lib/phantom/bin/phantomjs: 4: /usr/src/app/node_modules/phantomjs/lib/phantom/bin/phantomjs: Syntax error: Unterminated quoted string
```

- [ ] wait for [font magician pr](https://github.com/jonathantneal/postcss-font-magician/pull/7) and switch to original packet
- [ ] wait for [the font magician fix](https://github.com/jonathantneal/postcss-font-magician/issues/9)
- [ ] wait for (isparta fix)[https://github.com/douglasduteil/isparta/issues/81] before upgrading to babel 6
- [ ] wait for [babel-plugin-react-transform fix](https://github.com/gaearon/babel-plugin-react-transform/issues/46) and move to babel 6
- [ ] replace my fork with the actual npm released version of html-webpack-plugin
- [ ] wait for babel 6 fixes & update it
- [ ] I don't have to specify mime types everywhere, see common loaders.js, fix this
- [ ] update readme: directory layout
- [ ] wait for [PR](https://github.com/acdlite/redux-batched-updates/pull/3) & update redux-batched-updates
- [ ] try to get rid of stage & optional keys in js loader query
- [ ] remove run-sequence & use gulp 4.x `series` function instead
