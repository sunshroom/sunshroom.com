module.exports = function(grunt) {

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-wintersmith');

  grunt.registerTask('default', ['preview']);
  grunt.registerTask('build', ['clean', 'concat', 'stylus', 'wintersmith:build']);
  grunt.registerTask('preview', ['build', 'wintersmith:preview']);
  grunt.registerTask('test', ['jshint:dev']);
  grunt.registerTask('deploy', ['build', 'cssmin', 'uglify']); // , 'gh-pages'

  var jsFiles = [
    'bower_components/jquery/jquery.js'
  , 'bower_components/jquery-backstretch/jquery.backstretch.js'
  ]
    , defaultBanner = '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n';

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json')

    // Build
  , clean: ['build']

  , concat: {
      'contents/js/main.js': jsFiles
    }

  , stylus: {
      options: {
        banner: defaultBanner
      , compress: false
      //, 'include css': true
      //, linenos: true
      }
    , 'contents/css/main.css': 'contents/css/src/main.styl'
    }

  , wintersmith: {
      build: {}
    , preview: {
        options: {
          action: 'preview'
        }
      }
    }

    // Testing
  , watch: {
      // Livereload when build changes
      livereload: {
        options: {
          livereload: true
        }
      , files: ['build/**/*']
      }
      // Build when source files change
    , build: {
        files: ['contents/css/src/*.styl', 'contents/**/*.md', 'templates/**/*.jade', 'contents/img/**', jsFiles]
      , tasks: ['build']
      }
    }

  , csslint: {
      options: { // CSS Lint is cranky and needlessly opinionated: http://2002-2012.mattwilcox.net/archive/entry/id/1054/
        'adjoining-classes': false
      , 'box-sizing': false
      , 'compatible-vendor-prefixes': false // Throwing errors for ancient vendor prefixes
      , 'fallback-colors': false
      , 'floats': false
      , 'font-sizes': false
      , 'ids': false
      , 'outline-none': false
      , 'qualified-headings': false
      , 'star-property-hack': false
      , 'unique-headings': false
      , 'universal-selector': false
      , 'unqualified-attributes': false
      }
    , src: ['contents/css/*.css']
    }

  , jshint: {
      options: {
        laxcomma: true
      }
      // To do: lint main.js; currently it's a bloodbath
    , dev: ['Gruntfile.js']
    , prod: ['Gruntfile.js']
    }

    // Packaging
  , cssmin: {
      options: {
        banner: defaultBanner
      , report: 'min'
      }
    , 'build/css/main.css': 'contents/css/main.css'
    }

  , uglify: {
      options: {
        banner: defaultBanner
      , report: 'min'
      }
    , 'build/js/main.js': jsFiles
    }

    // Deployment
  , 'gh-pages': {
      options: {
        base: 'build'
      }
    , src: '**/*'
    , message: 'Auto-generated commit'
    }

  });
};