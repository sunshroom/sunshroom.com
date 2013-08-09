module.exports = function(grunt) {

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-wintersmith');

  grunt.registerTask('default', ['preview']);
  grunt.registerTask('build', ['clean', 'concat', 'stylus', 'wintersmith:build']);
  grunt.registerTask('preview', ['build', 'wintersmith:preview']);
  grunt.registerTask('test', ['build', 'jshint:dev']);
  grunt.registerTask('deploy', ['build', 'jshint:prod', 'uglify:prod']); // , 'gh-pages'

  var jsFiles = [
    'bower_components/jquery/jquery.js'
  , 'bower_components/jquery-backstretch/jquery.backstretch.js'
  ];

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  , wintersmith: {
      build: {}
    , preview: {
        options: {
          action: 'preview'
        }
      }
    }
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
    // To do: lint main.js; currently it's a bloodbath
  , jshint: {
      options: {
        laxcomma: true
      }
    , dev: ['Gruntfile.js']
    , prod: ['Gruntfile.js']
    }
  , uglify: {
      prod: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        , report: 'min',
        }
      , files: {
          'build/js/main.js': jsFiles
        }
      }
    }
  , 'gh-pages': {
      options: {
        base: 'build'
      }
    , src: '**/*'
    , message: 'Auto-generated commit'
    }

  });
};