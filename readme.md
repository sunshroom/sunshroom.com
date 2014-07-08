# alexandersynaptic.com

An experiment in using [Wintersmith](https://github.com/jnordberg/wintersmith), a Node-based static site generator, to create a simple personal homepage hosted on GitHub Pages at [sunshroom.com](http://sunshroom.com).

## Installation

**Requirements**: npm, Bower, Grunt, and Wintersmith. Use `npm install [package] -g` followed by `npm install` and `bower install`. This will install all dependencies and should get you up and running in no time.

## Configuration

Most settings (including menus) can be configured by editing `config.json`.

## Development

A preview server is available at `localhost:8088` by running `grunt preview` from the command line. Open `Gruntfile.js` for more commands.

## Deployment

Grunt handles automated deployment to GitHub Pages at [sunshroom.com](http://sunshroom.com) using `grunt deploy`. Hack this to suit your own needs.

## Plugins

- [Backstretch](https://github.com/srobbin/jquery-backstretch): drop any number of images into `contents/img/photos` and tweak the relevant settings in `config.json` to control the background image slideshow. If no images exist the slideshow functionality will be disabled.
- [Baseline](https://github.com/daneden/Baseline.js): dynamically alters image margins to preserve vertical rhythm.

## Credits

Not all of these projects are in use but all were interesting to explore and inspirational.

- [Wintersmith](https://github.com/jnordberg/wintersmith): static site generator in Node.
- [Wintersmith-Stylus](https://github.com/jnwng/wintersmith-stylus): plugin to add [Stylus](http://learnboost.github.io/stylus/) and [Nib](https://github.com/visionmedia/nib) support to Wintersmith.
- [HTML5 Boilerplate](http://html5boilerplate.com/): basic bits and pieces to get your project up and running.
- [Fluidity](http://fluiditycss.com/): a minimal framework for Stylus.
- [Normalize](https://github.com/necolas/normalize.css): normalize.
- [Lo-Dash](http://lodash.com/): alternative to underscore.js.
- [Google Web Fonts](https://www.google.com/fonts/): nice type.

## License

Since this is my personal homepage the `contents` folder is under copyright control. The code itself is released under the GPL however. Feel free to copy and reuse anything that isn't uniquely mine. My photos (those that don't feature my likeness in the photo at least) are released under a Creative Commons license and may be reused under the terms of use specified on [my homepage](http://sunshroom.com).
