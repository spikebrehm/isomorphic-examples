module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      main: {
        options: {
          debug: true,
        },
        files: {
          'bundle.js': 'index.js',
        },
      },
    },
  });

  // Tell Grunt to load tasks from NPM dependencies.
  grunt.loadNpmTasks('grunt-browserify');

  // Set up individual tasks.
  grunt.registerTask('default', ['browserify']);
};
