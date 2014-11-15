/*
 * grunt-screenshots
 * https://github.com/jefflembeck/grunt-screenshots
 *
 * Copyright (c) 2014 Jeffrey Lembeck
 * Licensed under the MIT license.
 */

/*global require:true*/
module.exports = function(grunt) {
  'use strict';

  var screenshot = require( "../lib/shot-wrapper" );

  grunt.registerMultiTask( 'screenshots', 'Use Grunt and PhantomJS to generate Screenshots of pages', function() {
    var done = this.async();
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      url: '',
      output: ''
    });

    screenshot.takeShot( options.url, options.output, function(){
      done();
    });
  });

};
