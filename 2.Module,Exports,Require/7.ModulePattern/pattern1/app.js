
/* It is actually calls the entire  greet module , 
   Think about like this:
   
   require('./module.exports = function(){
    console.log('Hello'); 
};')

*/
var Hi = require('./greet'); 
Hi();