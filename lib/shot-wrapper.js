/*global console:true*/
/*global require:true*/
/*global __dirname:true*/
(function(exports){
  "use strict";

  var path = require( "path" );

  var execFile = require( "child_process" ).execFile;
  var phantomPath = require( "phantomjs" ).path;
  var phantomscript = path.resolve( path.join( __dirname, "screenshotter.js" ));

  exports.takeShot = function( url, output, cb ){
      if( !(typeof url === "string" && typeof output === "string") ){
        throw new Error( "URL and output must be strings" );
      }
      if( !(url.length && output.length) ){
        throw new Error( "URL and output must not be empty strings" );
      }
      execFile( phantomPath, [
                phantomscript,
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
