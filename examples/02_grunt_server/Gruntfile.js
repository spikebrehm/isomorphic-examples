module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      main: {
        options: {
          debug: true,
        },
        files: {
          'public/bundle.js': 'client/index.js',
        },
      },
    },

    watch: {
      browserify: {
        files: 'client/**/*',
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      },
    },

    nodemon: {
      main: {},
    },

    concurrent: {
      main: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      },
    },
  });

  // Tell Grunt to load tasks from NPM dependencies.
  require('load-grunt-tasks')(grunt);

  // Set up individual tasks.
  grunt.registerTask('default', ['browserify', 'concurrent']);
};
