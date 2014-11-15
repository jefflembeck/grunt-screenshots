/*
 * grunt-screenshots
 * https://github.com/jefflembeck/grunt-screenshots
 *
 * Copyright (c) 2014 Jeffrey Lembeck
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'lib/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    screenshots: {
      default_options: {
        options: {
          url: 'http://alistapart.com/',
          output: 'ala'
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'screenshots']);

};
