# alexandersynaptic.com

An experiment in using Wintersmith, a Node-based static site generator, to create a simple personal homepage.

## Setup

Many core settings can be configured by editing `config.json` but you'll need to get your feet wet mucking about with the layouts to customize this project for your own use.

## Projects

Projects should be included as directories containing an `index.md` file under `./contents/projects/`.

### Backstretch

Drop any number of images into `contents/img/backgrounds` and tweak the relevant settings in `config.json` to control the background image slideshow.

## Bugs

- The vertical rhythm isn't perfect; because it is based on proportional units things can get a little buggy when nesting scaled elements. There are a few imperfect hacks to get around this (read comments in the source).

## Credits

- [Wintersmith](https://github.com/jnordberg/wintersmith): static site generator in Node.
- Wintersmith-Stylus: plugin to add Stylus support to Wintersmith.
- [Fluidity](http://fluiditycss.com/): a minimal framework for Stylus.
- [Backstretch](https://github.com/srobbin/jquery-backstretch): jQuery plugin for background images.
- HTML5 Boilerplate: basic bits and pieces to get your project up and running.
- [Normalize](https://github.com/necolas/normalize.css)
- [Stylus](http://learnboost.github.io/stylus/): CSS preprocessor for Node.
- [Nib](https://github.com/visionmedia/nib)
- Google Web Fonts: nice type.

## License

You are welcome to fork this project and make your own homepage as long as you remove all of my personal content apart from a link back to this GitHub repo (if you like).