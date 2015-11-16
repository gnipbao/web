# starter kit

# table of contents

* [up and running wih docker](#up-and-running-with-docker)
* [directory layout](#directory-layout)
* [development](#development)
* [setup](#setup)
* [environment variables](#environment-variables)
* TODO

# up and running with docker

```
docker build -t your-app-name .
```

after that dev server will listen on 3001

# directory layout

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


# development

if you want to develop without docker for smooth dev process install these tools:

* [nvm](https://github.com/creationix/nvm)
* [avn](https://github.com/wbyoung/avn)
* [avn-nvm](https://github.com/wbyoung/avn-nvm)
* [node-foreman](https://github.com/strongloop/node-foreman)

## setup

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

## environment variables

before you start `cp .env.example .env`:

* `API_ROOT` - api root url
* `OPEN_IN_BROWSER` ­ set to `true` if you want to open your app in browser when running `npm start`
* `DEVELOPMENT_BROWSER` ­ browser that you use for development
* `DEVTOOLS_DOCKABLE` - if set to `false` it will create an external devtools window for you

## make tasks

* `make` ­ starts development server & runs karma in watch mode (TDD)

## npm tasks

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

## options

Options:
* `verbose` ­ set verbosity to the maximum level
* `quiet` - set this to true and you'll see no error output in the console and it will make much harder to now whats wrong

By default source maps is generated using `cheap-module-inline-source-map` option.
If thats not enough for you than you can change it to `eval-source-map` or even the slowest `source-map`.
Here is some [more info about devtool](https://webpack.github.io/docs/configuration.html#devtool).

## analysis

You can find webpack stats file in `dist/webpack.stats.json` and
feed it to [webpack stats analyzer](http://webpack.github.io/analyse/)

## troubleshooting

Having an issue? Report it and I'll get to it as soon as possible!

## resources

* [40 webpack screencasts in russian](https://learn.javascript.ru/webpack-screencast), takes about 2h to get started
* [awesome react](https://github.com/enaqx/awesome-react)
* [awesome redux](https://github.com/xgrommx/awesome-redux)
