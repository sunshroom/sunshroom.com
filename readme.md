# A Synaptic Homepage

An experiment in using [Wintersmith](https://github.com/jnordberg/wintersmith), a Node-based static site generator, to create a simple personal homepage hosted on GitHub Pages at [alexandersynaptic.com](http://alexandersynaptic.com).

## Installation

Install [Wintersmith](https://github.com/jnordberg/wintersmith) with `npm install wintersmith -g`. Next run `npm install` from the directory containing this git repo.

Many core settings can be configured by editing `config.json` but you'll need to get your feet wet.

Preview server available at `localhost:8088` by running `wintersmith preview` from the command line.

## Deployment

### GitHub Pages

Currently I deploy to GitHub Pages at [alexandersynaptic.com](http://alexandersynaptic.com). Wintersmith is configurd to output to the actual user page repo (which I then push to publish).

### Heroku

I also experimented with serving the site on Heroku using Express. [More information](http://tlvince.com/wintersmith-on-heroku).

## Features

- Projects: should be included as directories containing an `index.md` file under `./contents/projects/`.
- Backstretch: drop any number of images into `contents/img/backgrounds` and tweak the relevant settings in `config.json` to control the background image slideshow.

## Known issues

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

All personal content (including the contents of the biography, projects, and contact folder) are under copyright. Everything else is licensed under the GPL. Fork this project and make your own homepage! Just don't use anything that is clearly about me :)