module.exports = function(grunt) {

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-wintersmith');

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s)
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('preview', ['concat', 'wintersmith:preview'])
  grunt.registerTask('build', ['clean', 'wintersmith:build', 'uglify'])
  grunt.registerTask('deploy', ['build', 'gh-pages'])

  var jsFiles = [
    'bower_components/jquery/jquery.js'
  , 'bower_components/jquery-backstretch/jquery.backstretch.js'
  ]

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    // Tested, working
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
      development: {
        src: jsFiles,
        dest: 'contents/js/main.js'
      }
    }
  , uglify: {
      production: {
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