module.exports = function(grunt) {

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
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
  ];

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json')

  , clean: ['build']

  , concat: {
      'contents/js/main.js': jsFiles
    }

  , stylus: {
      options: {
        compress: false
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
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      , report: 'min'
      }
    , 'build/css/main.css': 'contents/css/main.css'
    }

  , uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
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