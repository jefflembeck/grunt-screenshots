/*global phantom:true*/
/*global require:true*/
/*global window:true*/

/*
phantom args
  [0] - url
  [1] - output
*/
(function(){
    "use strict";

    var page = require( "webpage" ).create();

    var site = phantom.args[0],
        output = phantom.args[1];

    page.open( site, function( status ){
        if( status !== "success" ){
            phantom.exit( 1 );
        }
        page.render( output + ".png" );
        phantom.exit( 0 );
    });

}());
