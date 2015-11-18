# Starter kit

# Table of contents

* [directory layout](#directory-layout)
* [development](#development)
* [up and running wih docker](#up-and-running-with-docker)
* [setup](#setup)
* [environment variables](#environment-variables)
* TODO

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

### environment variables

Before you start `cp .env.example .env`:

* `API_ROOT` - api root url
* `OPEN_IN_BROWSER` ­ set to `true` if you want to open your app in browser when running `npm start`
* `DEVELOPMENT_BROWSER` ­ browser that you use for development
* `DEVTOOLS_DOCKABLE` - if set to `false` it will create an external devtools window for you

### make tasks

* `make` ­ starts development server & runs karma in watch mode (TDD)

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

### options

Options:
* `verbose` ­ set verbosity to the maximum level
* `quiet` - set this to true and you'll see no error output in the console and it will make much harder to now whats wrong

By default source maps is generated using `cheap-module-inline-source-map` option.
If thats not enough for you then you can change it to `eval-source-map` or even the slowest `source-map`.
Here is some [more info about devtool](https://webpack.github.io/docs/configuration.html#devtool).

### analysis

You can find webpack stats file in `dist/webpack.stats.json` and
feed it to [webpack stats analyzer](http://webpack.github.io/analyse/)

### updating

[npm-check-updates](https://github.com/tjunnone/npm-check-updates)

### postcss

If you want to install any additional postcss plugin, first check if its already
in [precss](https://github.com/jonathantneal/precss/blob/master/package.json#L34) or in 
[postcss-cssnext](https://github.com/cssnext/postcss-cssnext/blob/master/package.json#L35)

# Up and running with docker-compose

## TL;DR

* _I assume you are working on Mac OS X, use a docker-machine, rbenv & have
  ruby 2.0.0 installed_

```
git clone git@github.com:codekitchen/dinghy.git && cd dinghy/bin
rbenv use 2.0.0
./dinghy create --provider virtualbox
./dinghy up
docker-compose up
```

and you are all set:

```
open http://$(docker-machine ip dinghy):3000
```

### Troubles?

By default it listen's on port 3000,
you can change this in [docker-compose.yml](https://github.com/vyorkin/starter-kit/blob/master/docker-compose.yml#L7)

To see your existing docker machines:

```
docker-machine ls
```

## the details

If you are not me and want to install additional npm packages
then you should create your own docker base image (for the sake of speed
& productivity).

```
docker build -t yourname/base-image-name .
```

Change the [`Dockerfile-dev`](https://github.com/vyorkin/starter-kit/blob/master/Dockerfile-dev#L1)
to build `FROM` your new base image.

Also, dont' forget to replace [the maintainer name](https://github.com/vyorkin/starter-kit/blob/master/Dockerfile#L2)
with your's if you want to push your base image to the dockerhub.

# Resources

* [40 webpack screencasts in russian](https://learn.javascript.ru/webpack-screencast), takes about 2h to get started
* [awesome react](https://github.com/enaqx/awesome-react)
* [awesome redux](https://github.com/xgrommx/awesome-redux)

# Troubleshooting

Having an issue? Report it and I'll get to it as soon as possible!
