[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

# Change by Tidusvn05
- Updated package.json to lastest (2018-04-24)
- Moved CDN provider from googleapis to CDNJS
- Don't support old browser (You can use index-support-ie.html if want.)
- remove doc url comment in html file. Moved to README file.
- Added bootstrap, jshint.
- Added bootstrap 4 [pricing template](https://getbootstrap.com/docs/4.0/examples/pricing/).
- Disbled minify html as default. You can setting in gulpfile
- Added function to generate minify file for js-app
- Watching support js files now.
- Fixed bug `Don't run success for first time.`
- Added icon pack fontawesome 5.0.10 free version.
- Added icon pack materialdesignicons 2.3.54 free version.

# Changed by [kelsS](https://github.com/kelsS/)
- Updated project to use [Yarn](https://yarnpkg.com/lang/en/)
- Changed from gulp-autoprefixer to [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- Add use of [gulp-postcss](https://www.npmjs.com/package/gulp-postcss)
- Add [Nunjucks HTML Templating](https://www.npmjs.com/package/gulp-nunjucks)
- Updated npm packages as of (2018-06-15)
- Copy Bootstrap 4 SCSS from node_modules to src folder
- Remove bootstrap 4 pricing template
- Change to use Boostrap 4 reboot by default
- Change to use Bootstrap 4 print styles by default

# Reference Documents/Links
- [DNS prefetching](http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers)
- [Assets prefetching](http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/#section:resource-prefetching)
- [Page prefetching](http://calendar.perfplanet.com/2012/speed-up-your-site-using-prefetching)
- SCSS Structure use [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/)
- Write Document for SCSS using [SASSDOC](http://sassdoc.com/)
- [Font awesome 5.0.10](https://fontawesome.com/icons?d=gallery&s=brands,light,regular,solid&m=free)
- [Material Design Icon](https://materialdesignicons.com/)


## Some Tips

### How to debug css
- in scss/styles.scss file
- change `$pesticide-debug-outline` and `$pesticide-debug-depth` to `true`

### How to start for beginner
- Install gulp: `yarn global add gulp`
- git clone git@github.com:kelsS/sassy-starter.git
- cd sassy-starter
- run `yarn install`
- run `yarn dev` or 
- run 'gulp'


### How to enable or disable icon pack
- Edit in file scss/styles
- Find block : `$Icon packages`

### How to use icon pack
- fontawesome: `<span class="fa fa-play"></span>`, replace `play` by icon name.
- materialdesignicon: `<span class="mdi mdi-play-circle"></span>`, replace `play-circle` by icon name.

### For production
- Let use `min` files.


# Sassy Starter [![Stories in Ready](https://badge.waffle.io/minamarkham/sassy-starter.png?label=ready&title=Ready)](https://waffle.io/minamarkham/sassy-starter)

A starter toolkit based on [Scalable and Modular Architecture for CSS](http://smacss.com/) (SMACSS) and [Atomic Design](http://atomicdesign.bradfrost.com) for [Sass](http://sass-lang.com/) (SCSS) projects. Do what you'd like with it :)

Styles are broken down into the following groups: **Base, Layout, Atoms, Molecules, Organisms, States, Themes, Utilities and Overrides**

## Getting Started

1. If needed, [install](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) `node` and `npm` (Node Package Manager).
- If needed, install `gulp` with `yarn global add gulp`.
- Clone this repo with `git clone https://github.com/minamarkham/sassy-starter` or download the zip.
- In terminal, `cd` to the folder containing your project. Alternatively, you can type `cd ` and drag the location of the folder into your terminal and hit enter (on Macs).
- In terminal, type `yarn install`. If (and _only_ if) `yarn install` isn't working, try `sudo yarn install`. This should install all [dependencies](#dependencies).
- In terminal, enter `gulp`.
- Your browser should open at `http://localhost:3000`. You can access this same page on any device on the same wifi network and they'll see whats on your screen. It'll even sync scrolls and clicks!
- Edit your code inside of the `src` folder.
- Your complied and minified css, html, and javascript files will be created and updated in `dist/`. Never edit files within the `dist/` folder, as it gets deleted frequently.
- Keep `gulp` running while you're making changes. When you want to stop the gulp task, hit `ctrl + C`.

_For theming: add separate file (theme.scss) in`src/scss/themes/`, override the default `$theme` variable, and run `gulp themes`._

## Requirements
- Yarn
- Node/NPM
- LibSass
- Gulp

## Features
- Live reloading with BrowserSync
- Image Minification
- Github Pages deployment
- Sass linting (based on [default](https://github.com/sasstools/sass-lint/blob/master/lib/config/sass-lint.yml) config)
- Autoprefixer configuration
- SMACSS and Atomic Design-based folder structure
- `px` to `em`, `px` to `rem` and other useful functions.
- Mixins for inlining media queries.
* Useful CSS helper classes.
* Default print styles, performance optimized.
* "Delete-key friendly." Easy to strip out parts you don't need.
- Includes:
  - [`Normalize.css`](https://necolas.github.com/normalize.css/)
    for CSS normalizations and common bug fixes
  - [`CSS Pesticide`](https://pesticide.io)
    for easy CSS debugging
  - [`jQuery`](https://jquery.com/) via CDN, with a local fallback
  - [`Modernizr`](http://modernizr.com/), via CDN, for feature
    detection
  - [`Apache Server Configs`](https://github.com/h5bp/server-configs-apache)
    that, among other, improve the web site's performance and security

## Dependencies
```
"autoprefixer": "^8.6.0",
"bootstrap": "^4.1.1",
"browser-sync": "^2.23.7",
"colors": "^1.2.1",
"del": "^3.0.0",
"gulp": "^3.9.1",
"gulp-clean-css": "^3.9.3",
"gulp-concat": "^2.4.3",
"gulp-gh-pages": "^0.5.4",
"gulp-htmlmin": "^4.0.0",
"gulp-imagemin": "^4.1.0",
"gulp-jshint": "^2.1.0",
"gulp-notify": "^3.2.0",
"gulp-nunjucks": "^4.0.0",
"gulp-nunjucks-render": "^2.2.2",
"gulp-plumber": "^1.2.0",
"gulp-postcss": "^7.0.1",
"gulp-rename": "^1.2.0",
"gulp-sass": "^4.0.1",
"gulp-sass-lint": "1.3.4",
"gulp-size": "^3.0.0",
"gulp-sourcemaps": "^2.6.4",
"gulp-strip-comments": "^2.5.2",
"gulp-uglify": "^3.0.0",
"imagemin-pngquant": "^5.1.0",
"jshint": "^2.9.5",
"minimatch": "^3.0.4",
"nunjucks": "^3.1.3",
"popper.js": "^1.14.3",
"run-sequence": "^2.2.1",
"sassdoc": "^2.5.0",
"vinyl-paths": "^2.0.0"
```

## Tasks
- clean:dist
- styles
- browser-sync
- deploy
- js-app
- js-libs
- sass-lint
- minify-html
- watch
- imagemin
- stats
- sassdoc
- themes
- default
  - clean:dist
  - browser-sync
  - js-app
  - js-libs
  - imgmin
  - minify-html
  - styles
  - watch
- build
  - clean:dist
  - js-app
  - js-libs
  - imgmin
  - minify-html
  - styles
  - copy
- audit
  - sass-lint
  - stats

## Directory structure

```
┌── .gitignore
├── .htaccess
├── .sass-lint.yml
├── .travis.yml
├── src
│   ├── browserconfig.xml
│   ├── crossdomain.xml
│   ├── humans.txt
│   ├── icons
│   │   ├── apple-touch-icon.png
│   │   ├── favicon.ico
│   │   └── favicon.png
│   ├── img
│   │   ├── 7.jpg
│   │   └── home
│   │       └── 7.jpg
│   ├── index.html
│   ├── js
│   ├── robots.txt
│   └── scss
│       ├── atoms
│       │   └── _index.scss
│       ├── base
│       │   ├── _base.scss
│       │   └── _index.scss
│       ├── layout
│       │   └── _index.scss
│       ├── libs
│       │   ├── _index.scss
│       │   ├── _normalize.scss
│       │   └── _pesticide.scss
│       ├── molecules
│       │   └── _index.scss
│       ├── organisms
│       │   └── _index.scss
│       ├── overrides
│       │   └── _index.scss
│       ├── states
│       │   ├── _index.scss
│       │   └── _print.scss
│       ├── themes
│       │   └── rebeccapurple.scss
│       ├── utilities
│       │   ├── _colors.scss
│       │   ├── _config.scss
│       │   ├── _fonts.scss
│       │   ├── _functions.scss
│       │   ├── _index.scss
│       │   ├── _mixins.scss
│       │   └── _typography.scss
│       ├── styles.scss
│       └── _shame.scss
├── gulpfile.js
└── package.json
```

## Bugs & Support
Developed by [@MinaMarkham](http://twitter.com/MinaMarkham). Please list all bugs and feature requests in the Github issue tracker.

## Thanks & Resources

This toolkit is based on the work of the following fine people & projects.

- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Scalable and Modular Architecture for CSS](http://smacss.com/book) (<abbr title="Scalable and Modular Architecture for CSS">SMACSS</abbr>)
- [Atomic Design](http://atomicdesign.bradfrost.com)
