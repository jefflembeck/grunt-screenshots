/*global console:true*/
/*global require:true*/
(function(exports){
  "use strict";

  var execFile = require( "child_process" ).execFile;
  var phantomPath = require( "phantomjs" ).path;

  exports.takeShot = function( url, output, cb ){
      execFile( phantomPath, [
                url,
                output
      ],
      function( err, stdout, stderr ){
          if( err ){
              throw err;
          }

          if( stderr ){
              console.error( stderr );
          }

          if( stdout ){
              console.log( stdout );
          }
          if( cb ){
              cb();
          }
      });
  };

}(typeof exports === "object" && exports || this));
