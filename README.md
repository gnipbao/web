# Starter kit

# Table of contents

* [up and running](#up-and-running)
* [directory layout](#directory-layout)
* [development](#development)
* [setup](#setup)
* [environment variables](#environment-variables)
* TODO

# Up and running

## TL;DR

 _I assume you are working on Mac OS X and using docker-machine_.

#### Setup:

Install [docker-compose](https://docs.docker.com/compose/) & [dinghy](https://github.com/codekitchen/dinghy).

```
make docker-setup
```

#### Start:

```
make up
```

#### Stop:

```
make halt
```

If everying is ok take a look at [the details](#the-details).

### Troubles?

By default it listens on port 3000,
you can change this in [docker-compose.yml](https://github.com/vyorkin/starter-kit/blob/master/docker-compose.yml#L7)
and [Makefile](https://github.com/vyorkin/starter-kit/blob/master/Makefile#L3)

To see your existing docker machines:

```
docker-machine ls
```

There is one known issue with node-sass (libsass):
`The libsass binding was not found in ...`.
In this case you can simply rebuild the base image with `make docker-rebuild`

## Why?

* vboxsf is completely unusable for active development because it breaks FSEvents & inotify,
there are several tools that aimed at making a more pleasant local development experience,
[https://github.com/codekitchen/dinghy#dinghy](dinghy) is just one of them.

## The details

First, take a look at these files:
* [Dockerfile](https://github.com/vyorkin/starter-kit/blob/master/Dockerfile)
* [Dockerfile-dev](https://github.com/vyorkin/starter-kit/blob/master/Dockerfile-dev)
* [Makefile](https://github.com/vyorkin/starter-kit/blob/master/Makefile)

And if you still need a further explanation:

You can create your own docker base image and
install any additional packages there (for the sake of speed & productivity).

```
docker build -t yourname/base-image-name .
```

Than change the [`Dockerfile-dev`](https://github.com/vyorkin/starter-kit/blob/master/Dockerfile-dev#L1) and
[Makefile]([Makefile](https://github.com/vyorkin/starter-kit/blob/master/Makefile.yml#L1) to build `FROM` your new base image.

Also, dont' forget to replace [the maintainer](https://github.com/vyorkin/starter-kit/blob/master/Dockerfile-dev#L2)
[name](https://github.com/vyorkin/starter-kit/blob/master/Dockerfile#L2) with your's
if you want to push your base image to the dockerhub.

# Directory layout

```
.
├── /dist/                                 # The folder for compiled output
├── /docs/                                 # Documentation files for the project
├── /config/                               # Configuration files
├── /gulp/                                 # Gulp tasks
├── /node_modules/                         # 3rd-party libraries and utilities
├── /src/                                  # The source code and resources of the application
│   ├── /assets/                           # Static files which are copied to ./dist on compile
│   │   ├── /icons/                        # Icons 
│   │   ├── /fonts/                        # Additional fonts that used in project
│   ├── /scripts/                          # Application scripts
│   │   ├── /actions/                      # Action creators that allow to trigger a dispatch to stores
│   │   ├── /api/                          # REST API / Relay endpoints
│   │   ├── /constants/                    # Action type constants
│   │   ├── /containers/                   #
│   │   ├── /components/                   # React components
│   │   ├── /decorators/                   # Decorators for various needs
│   │   ├── /forms/                        # React components representing forms
│   │   ├── /layouts/                      # Application layouts
│   │   ├── /lib/                          # App-specific code, utility classes and functions
│   │   ├── /pages/                        # React components representing "pages" in SPA
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
│── gulpfile.babel.js                      # Configuration file for automated builds
│── browserlist                            # The list of supporter browsers for autoprefixer
│── config.js                              # The main configuration file
└── package.json                           # The list of 3rd party libraries and utilities
```

# Development

For a smooth dev process you can install these tools (not required):

* [npm-check-updates](https://github.com/tjunnone/npm-check-updates)
* [nvm](https://github.com/creationix/nvm)
* [avn](https://github.com/wbyoung/avn)
* [avn-nvm](https://github.com/wbyoung/avn-nvm)
* [node-foreman](https://github.com/strongloop/node-foreman)

## Setup

There is a `config` section in `package.json`:

```
"config": {
  "https": false,
  "host": "localhost",
  "ports": {
    "app": 3000,
    "browserSync": 3001,
    "browserSyncUI": 3002
  }
}
```

* `sourceMap` ­ enable source maps for production (its enabled by default in dev env)

## Flow

### Make tasks

* `make` ­ builds app for production
* `make test` ­ runs tests & reports coverage
* `make tdd` ­ starts development server & runs karma in watch mode (TDD)

### npm tasks

to install dependencies:
```
npm install
```

to run development server:
```
npm start
```

to build for production env:
```
npm run build
```

to run tests:
```
npm test
```

### Options

Options:
* `verbose` ­ set verbosity to the maximum level
* `quiet` - set this to true and you'll see no error output in the console and it will make much harder to now whats wrong

By default source maps is generated using `cheap-module-inline-source-map` option.
If thats not enough for you then you can change it to `eval-source-map` or even the slowest `source-map`.
Here is some [more info about devtool](https://webpack.github.io/docs/configuration.html#devtool).

### Analysis

In root directory you can find webpack stats file named `webpack.stats.json` and
feed it to [webpack stats analyzer](http://webpack.github.io/analyse/)

### Updating

[npm-check-updates](https://github.com/tjunnone/npm-check-updates)

### Postcss

If you want to install any additional postcss plugin, first check if its already
in [precss](https://github.com/jonathantneal/precss/blob/master/package.json#L34) or in 
[postcss-cssnext](https://github.com/cssnext/postcss-cssnext/blob/master/package.json#L35)

# Resources

* [40 webpack screencasts in russian](https://learn.javascript.ru/webpack-screencast), takes about 2h to get started
* [webpack hot reloading magic (habra)](http://habrahabr.ru/company/Voximplant/blog/270593/)
* [awesome react](https://github.com/enaqx/awesome-react)
* [awesome redux](https://github.com/xgrommx/awesome-redux)
* [redux docs in russian](https://github.com/rajdee/redux-in-russian)
* [npm module checklist](https://github.com/bahmutov/npm-module-checklist)

# Troubleshooting

* try to run with `--verbose --profile` keys
* set `DEBUG=app:*` to see some additional logging with [debug](https://www.npmjs.com/package/debug#wildcards)

Having an issue? Report it and I'll get to it as soon as possible!
