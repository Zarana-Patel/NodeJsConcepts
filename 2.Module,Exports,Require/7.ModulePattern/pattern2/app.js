/*
     It is actually calls the entire  greet module , 
   Think about like this:
   
   require('.exports.greet = function(){
    console.log('Hello World!!'); 
};')

greet is method of export object.
*/



var greet2 = require('./greet').greet; // we are getting export object's property or method 
greet2();