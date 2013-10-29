# A Synaptic Homepage

An experiment in using [Wintersmith](https://github.com/jnordberg/wintersmith), a Node-based static site generator, to create a simple personal homepage hosted on GitHub Pages at [alexandersynaptic.com](http://alexandersynaptic.com).

This project is still very much under construction!

## Installation

**Requirements**: npm, Bower, Grunt, and Wintersmith. Use `npm install [package] -g` followed by `npm install` and `bower install`. This will install all dependencies specific to this project.

Most core settings (including menus) can be configured by editing `config.json`.

Preview server available at `localhost:8088` by running `grunt preview` from the command line.

## Deployment

Currently I am experimenting with automated deployment to GitHub Pages at [alexandersynaptic.com](http://alexandersynaptic.com) using `grunt deploy`.

## Plugins

- Backstretch: drop any number of images into `contents/img/backgrounds` and tweak the relevant settings in `config.json` to control the background image slideshow. If no images exist the slideshow functionality will be disabled.

## Issues

- The vertical rhythm isn't perfect; because it is based on proportional units things can get a little buggy when nesting scaled elements. There are a few imperfect hacks to get around this (read comments in the source).

## Credits

Not all of these projects are in use but all were interesting to explore and inspirational.

- [Wintersmith](https://github.com/jnordberg/wintersmith): static site generator in Node.
- [Wintersmith-Stylus](https://github.com/jnwng/wintersmith-stylus): plugin to add Stylus support to Wintersmith.
- [Fluidity](http://fluiditycss.com/): a minimal framework for Stylus.
- [Backstretch](https://github.com/srobbin/jquery-backstretch): jQuery plugin for background images.
- [HTML5 Boilerplate](http://html5boilerplate.com/): basic bits and pieces to get your project up and running.
- [Normalize](https://github.com/necolas/normalize.css): normalize.
- [Stylus](http://learnboost.github.io/stylus/): CSS preprocessor for Node.
- [Nib](https://github.com/visionmedia/nib): lightweight framework for Stylus.
- [Lo-Dash](http://lodash.com/): alternative to underscore.js.
- [Google Web Fonts](https://www.google.com/fonts/): nice type.

## License

Since this is my personal homepage the `contents` folder is under copyright. The code itself is released under the GPL however. Sooner or later I may get around to making a bare bones template that you can modify for your own Wintersmith projects. In the meantime feel free to copy anything that isn't actual content (e.g. all .md files and associated images).