node-artisanal-integers
===

A little node module to get an Artisanal Integer from [Brooklyn Integers](http://www.brooklynintegers.com)

To install it, just do this:

    $ npm install node-artisanal-integers

And then in your project somewhere, do something like this:

    var artisanal = require('node-artisanal-integers');    

    artisanal.create(function(rsp){   
	    console.log(rsp);  
    });