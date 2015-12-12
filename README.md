[![Travis](https://travis-ci.org/partyrooms/web.svg)](https://travis-ci.org/partyrooms/web)
[![Circle](https://circleci.com/gh/partyrooms/web.svg?style=svg)](https://circleci.com/gh/partyrooms/web)
[![Dependency Status](https://david-dm.org/partyrooms/web.svg)](https://david-dm.org/partyrooms/web)
[![devDependency Status](https://david-dm.org/partyrooms/web/dev-status.svg)](https://david-dm.org/partyrooms/web#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/partyrooms/web/badges/gpa.svg)](https://codeclimate.com/github/partyrooms/web)
[![Coverage Status](https://coveralls.io/repos/partyrooms/web/badge.svg?branch=master&service=github)](https://coveralls.io/github/partyrooms/web?branch=master)
[![Codecov](https://codecov.io/github/partyrooms/web/coverage.svg?branch=master)](https://codecov.io/github/partyrooms/web?branch=master)
[![Codeship Status for partyrooms/web](https://codeship.com/projects/dfea9470-7f63-0133-3c3e-62195a4c75a1/status?branch=master)](https://codeship.com/projects/120580)
[![forthebadge](http://forthebadge.com/images/badges/ages-12.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com)

[![Codecov stats](https://codecov.io/github/partyrooms/web/branch.svg?limit=50&vg=on&legend=on&color=on&branch=master)](https://codecov.io/github/partyrooms/web/branch.svg?limit=50&vg=on&legend=on&color=on&branch=master)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/partyrooms/web)

# PartyRooms

![logo](https://raw.githubusercontent.com/partyrooms/web/master/src/assets/images/logo.png)

# Table of contents

* [development](#development)
* [setup](#setup)
* [environment variables](#environment-variables)

# Directory layout

```
.
├── /bin/                                  # Executables
├── /config/                               # Configuration files
├── /coverage/                             # Test coverage reports
├── /dist/                                 # The folder for compiled output
├── /flow/                                 # flowcheck config
├── /docs/                                 # Documentation files for the project
├── /gulpfile.js/                          # Gulp tasks
├── /node_modules/                         # 3rd-party libraries and utilities
├── /src/                                  # The source code and resources of the application
│   ├── /assets/                           # Static files which are copied to ./dist/public on compile
│   │   ├── /images
│   │   ├── /icons/                        # Icons 
│   │   ├── /fonts/                        # Additional fonts that used in project
│   ├── /scripts/                          # Application scripts
│   │   ├── /api/                          # REST API / Relay endpoints
│   │   ├── /constants/                    # Action type constants
│   │   ├── /components/                   # React components
│   │   ├── /decorators/                   # Decorators for various needs
│   │   ├── /forms/                        # React components representing forms
│   │   ├── /layouts/                      # Application layouts
│   │   ├── /lib/                          # App-specific code, utility classes and functions
│   │   ├── /pages/                        # React components representing pages
│   │   ├── /routes/                       # Routing configuration files
│   │   ├── /stores/                       # Stores contain the application state and logic
│   │   ├── /widets/                       # React widget components
│   │   └── /index.js                      # Applicaton entry point
│   ├── /styles/                           # Additional fonts that used in project
│   └── /templates/                        # Templates for server-side rendering
├── /webpack/                              # Webpack configuration files
│   ├── /common                            # Common build settings for webpack
│   ├── /development                       # Webpack settings to be applied only for development env
│   └── /production                        # Production webpack settings
│── browserlist                            # The list of supporter browsers for autoprefixer
│── config.js                              # The main configuration file
└── package.json                           # The list of 3rd party libraries and utilities
```

# Development

For a smooth dev process you can install these tools (not required):

* [greenkeeper](https://github.com/greenkeeperio/greenkeeper)
* [npm-check-updates](https://github.com/tjunnone/npm-check-updates)
* [nvm](https://github.com/creationix/nvm)
* [node-foreman](https://github.com/strongloop/node-foreman)

## Setup

There is a `config` section in `package.json`:

```
"config": {
  ...

  "https": false,
  "host": "localhost",
  "ports": {
    "app": 3000,
    "browserSync": 3001,
    "browserSyncUI": 3002
  },
  "sourceMap": true,
  "webRoot": "",
  "apiRoot": "http://localhost:8080",
  "devTools": true,
  "locale": "en_US",

  ...
}
```

* `sourceMap` ­ enable source maps for production (its enabled by default in dev env)

### Options

Options:
* `verbose` ­ set verbosity to the maximum level
* `profile`
* `quiet` - set this to true and you'll see no error output in the console and it will make much harder to now whats wrong
* `debug`
* `lint`

By default source maps is generated using `cheap-module-inline-source-map` option.
If thats not enough for you then you can change it to `eval-source-map` or even the slowest `source-map`.
Here is some [more info about devtool](https://webpack.github.io/docs/configuration.html#devtool).

### Analysis

In `dist` directory you can find webpack stats file named `webpack.stats.json` and
feed it to [webpack stats analyzer](http://webpack.github.io/analyse/) to see
some useful info about your bundle.

### Updating

* Updates are arriving automatically as PR's, thanks to [greenkeeper](http://greenkeeper.io/)
* If you want to check for updates manually: [npm-check-updates](https://github.com/tjunnone/npm-check-updates)

### Postcss

If you want to install any additional postcss plugin, first check if its already
in [precss](https://github.com/jonathantneal/precss/blob/master/package.json#L34) or in 
[postcss-cssnext](https://github.com/cssnext/postcss-cssnext/blob/master/package.json#L35)

# Resources

### Base knowledge

* [40 webpack screencasts in russian](https://learn.javascript.ru/webpack-screencast), takes about 2h to get started
* [webpack hot reloading magic (habra)](http://habrahabr.ru/company/Voximplant/blog/270593/)
* [awesome react](https://github.com/enaqx/awesome-react)
* [awesome redux](https://github.com/xgrommx/awesome-redux)
* [redux docs](http://rackt.org/redux/)
* [redux docs in russian](https://github.com/rajdee/redux-in-russian)
* [npm module checklist](https://github.com/bahmutov/npm-module-checklist)
* [react-router SSR](https://github.com/rackt/react-router/blob/master/docs/guides/advanced/ServerRendering.md)
* [fullstack redux tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)

### Markup & CSS

* [css modules](https://github.com/css-modules/css-modules), [icss (interoperable css)](https://github.com/css-modules/icss)
* [webpack css-laoder css modules](https://github.com/webpack/css-loader#css-modules)
* [react-css-modules](https://github.com/gajus/react-css-modules)
* [gajus/react-css-modules-examples](https://github.com/gajus/react-css-modules-examples)
* [css-modules/webpack-demo](https://github.com/css-modules/webpack-demo)

### Testing

* [mocha](http://mochajs.org/#getting-started)
* [chai](http://chaijs.com/api/bdd/)
* [sinon](http://sinonjs.org/)
* [sinon-chai](https://github.com/domenic/sinon-chai)
* [enzyme](https://github.com/airbnb/enzyme)
* [cheerio](https://github.com/cheeriojs/cheerio)

# Troubleshooting

* try to run with `--verbose --profile` keys
* set `DEBUG=app:*` to see some additional logging with [debug](https://www.npmjs.com/package/debug#wildcards)

Having an issue? Report it and I'll get to it as soon as possible!
